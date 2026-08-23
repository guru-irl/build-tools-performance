import React from 'react';
const LABEL_37289 = 'component_37289';
export function Component37289({ value = 37289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37289, 'data-value': derived.doubled }, children);
}
export default Component37289;
