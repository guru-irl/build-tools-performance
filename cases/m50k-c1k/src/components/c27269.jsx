import React from 'react';
const LABEL_27269 = 'component_27269';
export function Component27269({ value = 27269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27269, 'data-value': derived.doubled }, children);
}
export default Component27269;
