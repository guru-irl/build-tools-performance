import React from 'react';
const LABEL_261 = 'component_261';
export function Component261({ value = 261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_261, 'data-value': derived.doubled }, children);
}
export default Component261;
