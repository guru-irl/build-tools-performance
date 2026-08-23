import React from 'react';
const LABEL_20061 = 'component_20061';
export function Component20061({ value = 20061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20061, 'data-value': derived.doubled }, children);
}
export default Component20061;
