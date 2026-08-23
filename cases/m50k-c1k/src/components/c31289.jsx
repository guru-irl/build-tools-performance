import React from 'react';
const LABEL_31289 = 'component_31289';
export function Component31289({ value = 31289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31289, 'data-value': derived.doubled }, children);
}
export default Component31289;
