import React from 'react';
const LABEL_482 = 'component_482';
export function Component482({ value = 482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_482, 'data-value': derived.doubled }, children);
}
export default Component482;
