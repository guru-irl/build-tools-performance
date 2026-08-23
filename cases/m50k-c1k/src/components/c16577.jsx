import React from 'react';
const LABEL_16577 = 'component_16577';
export function Component16577({ value = 16577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16577, 'data-value': derived.doubled }, children);
}
export default Component16577;
