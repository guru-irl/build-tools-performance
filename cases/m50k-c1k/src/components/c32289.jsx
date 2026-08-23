import React from 'react';
const LABEL_32289 = 'component_32289';
export function Component32289({ value = 32289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32289, 'data-value': derived.doubled }, children);
}
export default Component32289;
