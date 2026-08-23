import React from 'react';
const LABEL_4240 = 'component_4240';
export function Component4240({ value = 4240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4240, 'data-value': derived.doubled }, children);
}
export default Component4240;
