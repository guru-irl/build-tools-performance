import React from 'react';
const LABEL_46004 = 'component_46004';
export function Component46004({ value = 46004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46004, 'data-value': derived.doubled }, children);
}
export default Component46004;
