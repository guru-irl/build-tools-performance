import React from 'react';
const LABEL_20238 = 'component_20238';
export function Component20238({ value = 20238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20238, 'data-value': derived.doubled }, children);
}
export default Component20238;
