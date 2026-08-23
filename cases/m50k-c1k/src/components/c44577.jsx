import React from 'react';
const LABEL_44577 = 'component_44577';
export function Component44577({ value = 44577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44577, 'data-value': derived.doubled }, children);
}
export default Component44577;
