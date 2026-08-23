import React from 'react';
const LABEL_46679 = 'component_46679';
export function Component46679({ value = 46679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46679, 'data-value': derived.doubled }, children);
}
export default Component46679;
