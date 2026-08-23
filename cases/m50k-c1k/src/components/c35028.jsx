import React from 'react';
const LABEL_35028 = 'component_35028';
export function Component35028({ value = 35028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35028, 'data-value': derived.doubled }, children);
}
export default Component35028;
