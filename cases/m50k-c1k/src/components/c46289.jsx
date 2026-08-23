import React from 'react';
const LABEL_46289 = 'component_46289';
export function Component46289({ value = 46289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46289, 'data-value': derived.doubled }, children);
}
export default Component46289;
