import React from 'react';
const LABEL_7261 = 'component_7261';
export function Component7261({ value = 7261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7261, 'data-value': derived.doubled }, children);
}
export default Component7261;
