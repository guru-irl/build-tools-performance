import React from 'react';
const LABEL_13338 = 'component_13338';
export function Component13338({ value = 13338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13338, 'data-value': derived.doubled }, children);
}
export default Component13338;
