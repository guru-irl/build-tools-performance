import React from 'react';
const LABEL_20028 = 'component_20028';
export function Component20028({ value = 20028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20028, 'data-value': derived.doubled }, children);
}
export default Component20028;
