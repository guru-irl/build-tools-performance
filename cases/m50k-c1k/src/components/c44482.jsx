import React from 'react';
const LABEL_44482 = 'component_44482';
export function Component44482({ value = 44482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44482, 'data-value': derived.doubled }, children);
}
export default Component44482;
