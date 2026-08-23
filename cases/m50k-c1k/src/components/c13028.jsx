import React from 'react';
const LABEL_13028 = 'component_13028';
export function Component13028({ value = 13028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13028, 'data-value': derived.doubled }, children);
}
export default Component13028;
