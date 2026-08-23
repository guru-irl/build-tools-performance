import React from 'react';
const LABEL_19432 = 'component_19432';
export function Component19432({ value = 19432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19432, 'data-value': derived.doubled }, children);
}
export default Component19432;
