import React from 'react';
const LABEL_26482 = 'component_26482';
export function Component26482({ value = 26482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26482, 'data-value': derived.doubled }, children);
}
export default Component26482;
