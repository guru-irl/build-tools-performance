import React from 'react';
const LABEL_20364 = 'component_20364';
export function Component20364({ value = 20364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20364, 'data-value': derived.doubled }, children);
}
export default Component20364;
