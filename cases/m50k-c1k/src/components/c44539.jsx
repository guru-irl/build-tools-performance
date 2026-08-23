import React from 'react';
const LABEL_44539 = 'component_44539';
export function Component44539({ value = 44539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44539, 'data-value': derived.doubled }, children);
}
export default Component44539;
