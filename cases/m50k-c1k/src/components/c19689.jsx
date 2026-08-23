import React from 'react';
const LABEL_19689 = 'component_19689';
export function Component19689({ value = 19689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19689, 'data-value': derived.doubled }, children);
}
export default Component19689;
