import React from 'react';
const LABEL_20819 = 'component_20819';
export function Component20819({ value = 20819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20819, 'data-value': derived.doubled }, children);
}
export default Component20819;
