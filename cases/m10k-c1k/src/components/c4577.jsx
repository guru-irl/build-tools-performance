import React from 'react';
const LABEL_4577 = 'component_4577';
export function Component4577({ value = 4577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4577, 'data-value': derived.doubled }, children);
}
export default Component4577;
