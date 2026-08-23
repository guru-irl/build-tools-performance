import React from 'react';
const LABEL_4028 = 'component_4028';
export function Component4028({ value = 4028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4028, 'data-value': derived.doubled }, children);
}
export default Component4028;
