import React from 'react';
const LABEL_21028 = 'component_21028';
export function Component21028({ value = 21028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21028, 'data-value': derived.doubled }, children);
}
export default Component21028;
