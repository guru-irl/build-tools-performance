import React from 'react';
const LABEL_26028 = 'component_26028';
export function Component26028({ value = 26028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26028, 'data-value': derived.doubled }, children);
}
export default Component26028;
