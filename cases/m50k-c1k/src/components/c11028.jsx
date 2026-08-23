import React from 'react';
const LABEL_11028 = 'component_11028';
export function Component11028({ value = 11028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11028, 'data-value': derived.doubled }, children);
}
export default Component11028;
