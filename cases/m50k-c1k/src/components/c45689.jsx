import React from 'react';
const LABEL_45689 = 'component_45689';
export function Component45689({ value = 45689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45689, 'data-value': derived.doubled }, children);
}
export default Component45689;
