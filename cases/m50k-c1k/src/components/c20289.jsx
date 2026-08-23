import React from 'react';
const LABEL_20289 = 'component_20289';
export function Component20289({ value = 20289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20289, 'data-value': derived.doubled }, children);
}
export default Component20289;
