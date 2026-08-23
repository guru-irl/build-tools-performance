import React from 'react';
const LABEL_20923 = 'component_20923';
export function Component20923({ value = 20923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20923, 'data-value': derived.doubled }, children);
}
export default Component20923;
