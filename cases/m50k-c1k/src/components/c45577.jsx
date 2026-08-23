import React from 'react';
const LABEL_45577 = 'component_45577';
export function Component45577({ value = 45577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45577, 'data-value': derived.doubled }, children);
}
export default Component45577;
