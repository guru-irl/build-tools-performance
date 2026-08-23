import React from 'react';
const LABEL_12289 = 'component_12289';
export function Component12289({ value = 12289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12289, 'data-value': derived.doubled }, children);
}
export default Component12289;
