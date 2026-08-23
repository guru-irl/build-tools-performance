import React from 'react';
const LABEL_17289 = 'component_17289';
export function Component17289({ value = 17289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17289, 'data-value': derived.doubled }, children);
}
export default Component17289;
