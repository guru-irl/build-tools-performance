import React from 'react';
const LABEL_25289 = 'component_25289';
export function Component25289({ value = 25289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25289, 'data-value': derived.doubled }, children);
}
export default Component25289;
