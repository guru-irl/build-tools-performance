import React from 'react';
const LABEL_26418 = 'component_26418';
export function Component26418({ value = 26418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26418, 'data-value': derived.doubled }, children);
}
export default Component26418;
