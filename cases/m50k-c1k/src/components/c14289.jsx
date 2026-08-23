import React from 'react';
const LABEL_14289 = 'component_14289';
export function Component14289({ value = 14289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14289, 'data-value': derived.doubled }, children);
}
export default Component14289;
