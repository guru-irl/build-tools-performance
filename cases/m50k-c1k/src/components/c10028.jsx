import React from 'react';
const LABEL_10028 = 'component_10028';
export function Component10028({ value = 10028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10028, 'data-value': derived.doubled }, children);
}
export default Component10028;
