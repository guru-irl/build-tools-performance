import React from 'react';
const LABEL_10577 = 'component_10577';
export function Component10577({ value = 10577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10577, 'data-value': derived.doubled }, children);
}
export default Component10577;
