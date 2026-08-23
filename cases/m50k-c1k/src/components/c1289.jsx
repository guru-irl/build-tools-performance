import React from 'react';
const LABEL_1289 = 'component_1289';
export function Component1289({ value = 1289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1289, 'data-value': derived.doubled }, children);
}
export default Component1289;
