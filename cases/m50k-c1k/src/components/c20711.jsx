import React from 'react';
const LABEL_20711 = 'component_20711';
export function Component20711({ value = 20711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20711, 'data-value': derived.doubled }, children);
}
export default Component20711;
