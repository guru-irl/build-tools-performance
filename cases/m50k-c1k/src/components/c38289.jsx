import React from 'react';
const LABEL_38289 = 'component_38289';
export function Component38289({ value = 38289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38289, 'data-value': derived.doubled }, children);
}
export default Component38289;
