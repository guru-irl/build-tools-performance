import React from 'react';
const LABEL_1028 = 'component_1028';
export function Component1028({ value = 1028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1028, 'data-value': derived.doubled }, children);
}
export default Component1028;
