import React from 'react';
const LABEL_19289 = 'component_19289';
export function Component19289({ value = 19289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19289, 'data-value': derived.doubled }, children);
}
export default Component19289;
