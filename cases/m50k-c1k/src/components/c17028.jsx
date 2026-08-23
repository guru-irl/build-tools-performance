import React from 'react';
const LABEL_17028 = 'component_17028';
export function Component17028({ value = 17028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17028, 'data-value': derived.doubled }, children);
}
export default Component17028;
