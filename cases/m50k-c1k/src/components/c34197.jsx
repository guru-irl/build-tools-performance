import React from 'react';
const LABEL_34197 = 'component_34197';
export function Component34197({ value = 34197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34197, 'data-value': derived.doubled }, children);
}
export default Component34197;
