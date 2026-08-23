import React from 'react';
const LABEL_4297 = 'component_4297';
export function Component4297({ value = 4297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4297, 'data-value': derived.doubled }, children);
}
export default Component4297;
