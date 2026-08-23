import React from 'react';
const LABEL_28289 = 'component_28289';
export function Component28289({ value = 28289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28289, 'data-value': derived.doubled }, children);
}
export default Component28289;
