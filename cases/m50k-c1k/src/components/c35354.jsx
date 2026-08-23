import React from 'react';
const LABEL_35354 = 'component_35354';
export function Component35354({ value = 35354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35354, 'data-value': derived.doubled }, children);
}
export default Component35354;
