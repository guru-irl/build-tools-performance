import React from 'react';
const LABEL_16289 = 'component_16289';
export function Component16289({ value = 16289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16289, 'data-value': derived.doubled }, children);
}
export default Component16289;
