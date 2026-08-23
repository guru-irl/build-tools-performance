import React from 'react';
const LABEL_20122 = 'component_20122';
export function Component20122({ value = 20122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20122, 'data-value': derived.doubled }, children);
}
export default Component20122;
