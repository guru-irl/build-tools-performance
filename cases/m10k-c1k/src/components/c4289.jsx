import React from 'react';
const LABEL_4289 = 'component_4289';
export function Component4289({ value = 4289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4289, 'data-value': derived.doubled }, children);
}
export default Component4289;
