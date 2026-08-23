import React from 'react';
const LABEL_39291 = 'component_39291';
export function Component39291({ value = 39291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39291, 'data-value': derived.doubled }, children);
}
export default Component39291;
