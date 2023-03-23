export const queries = {
  getInstrumentsNAreas:
    "SELECT noSerieInventario,denominacion,nombre as Area,rangoMax,rangoMin,marcaModelo,claseoVd,fechaCalibracion,noCert,estado,ubicacion,Instrumento.valorMaxTrabajo,conexionProceso,fechaProximaCalibracion,diametroCaja,longitudInmercion,Comentarios,usuario,baja FROM (([dbo].[Instrumento] Inner Join [dbo].[areas] on Instrumento.idArea = areas.idArea) Inner Join [dbo].[TipoInstrumento] on Instrumento.idTipoInstrumento = TipoInstrumento.idTipoInstrumento)",
  insertNewInstrumnet:
    "INSERT INTO Instrumento (noSerieInventario,idTipoInstrumento,idArea,rangoMax,rangoMin,marcaModelo,claseoVd,fechaCalibracion,noCert,estado,ubicacion,valorMaxTrabajo,conexionProceso,fechaProximaCalibracion,diametroCaja,longitudInmercion,Comentarios,usuario,baja) Values (@noSerieInventario,@idTipoInstrumento,@idArea,@rangoMax,@rangoMin,@marcaModelo,@claseoVd,@fechaCalibracion,@noCert,@estado,@ubicacion,@valorMaxTrabajo,@conexionProceso,@fechaProximaCalibracion,@diametroCaja,@longitudInmercion,@Comentarios,@usuario,@baja)",
  getById:
    "SELECT noSerieInventario,denominacion,nombre as Area,rangoMax,rangoMin,marcaModelo,claseoVd,fechaCalibracion,noCert,estado,ubicacion,Instrumento.valorMaxTrabajo,conexionProceso,fechaProximaCalibracion,diametroCaja,longitudInmercion,Comentarios,usuario,baja FROM (([dbo].[Instrumento] Inner Join [dbo].[areas] on Instrumento.idArea = areas.idArea) Inner Join [dbo].[TipoInstrumento] on Instrumento.idTipoInstrumento = TipoInstrumento.idTipoInstrumento) WHERE noSerieInventario=@id",
  deleteById: "DELETE FROM Instrumento WHERE noSerieInventario=@id",
  getAmountInstrumnet: "Select Count(*) FROM dbo.Instrumento",
  updateInstrument:
    "UPDATE Instrumento SET idTipoInstrumento=@idTipoInstrumento,idArea=@idArea,rangoMax=@rangoMax,rangoMin=@rangoMin,marcaModelo=@marcaModelo,claseoVd=@claseoVd,fechaCalibracion=@fechaCalibracion,noCert=@noCert,estado=@estado,ubicacion=@ubicacion,valorMaxTrabajo=@valorMaxTrabajo,conexionProceso=@conexionProceso,fechaProximaCalibracion=@fechaProximaCalibracion,diametroCaja=@diametroCaja,longitudInmercion=@longitudInmercion,Comentarios=@Comentarios,usuario=@usuario,baja=@baja WHERE noSerieInventario = @noSerieInventario",
};
