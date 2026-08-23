import React from 'react';
const LABEL_41289 = 'component_41289';
export function Component41289({ value = 41289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41289, 'data-value': derived.doubled }, children);
}
export default Component41289;
