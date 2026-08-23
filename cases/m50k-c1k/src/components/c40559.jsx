import React from 'react';
const LABEL_40559 = 'component_40559';
export function Component40559({ value = 40559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40559, 'data-value': derived.doubled }, children);
}
export default Component40559;
