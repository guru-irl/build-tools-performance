import React from 'react';
const LABEL_45582 = 'component_45582';
export function Component45582({ value = 45582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45582, 'data-value': derived.doubled }, children);
}
export default Component45582;
