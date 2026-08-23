import React from 'react';
const LABEL_33289 = 'component_33289';
export function Component33289({ value = 33289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33289, 'data-value': derived.doubled }, children);
}
export default Component33289;
