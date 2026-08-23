import React from 'react';
const LABEL_20940 = 'component_20940';
export function Component20940({ value = 20940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20940, 'data-value': derived.doubled }, children);
}
export default Component20940;
