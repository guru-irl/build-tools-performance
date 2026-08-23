import React from 'react';
const LABEL_8289 = 'component_8289';
export function Component8289({ value = 8289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8289, 'data-value': derived.doubled }, children);
}
export default Component8289;
