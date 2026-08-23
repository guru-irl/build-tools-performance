import React from 'react';
const LABEL_36028 = 'component_36028';
export function Component36028({ value = 36028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36028, 'data-value': derived.doubled }, children);
}
export default Component36028;
