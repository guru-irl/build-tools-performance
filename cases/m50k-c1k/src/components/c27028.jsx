import React from 'react';
const LABEL_27028 = 'component_27028';
export function Component27028({ value = 27028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27028, 'data-value': derived.doubled }, children);
}
export default Component27028;
