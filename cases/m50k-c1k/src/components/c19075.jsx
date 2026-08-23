import React from 'react';
const LABEL_19075 = 'component_19075';
export function Component19075({ value = 19075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19075, 'data-value': derived.doubled }, children);
}
export default Component19075;
