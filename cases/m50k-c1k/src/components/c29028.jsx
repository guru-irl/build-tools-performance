import React from 'react';
const LABEL_29028 = 'component_29028';
export function Component29028({ value = 29028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29028, 'data-value': derived.doubled }, children);
}
export default Component29028;
