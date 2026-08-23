import React from 'react';
const LABEL_44289 = 'component_44289';
export function Component44289({ value = 44289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44289, 'data-value': derived.doubled }, children);
}
export default Component44289;
