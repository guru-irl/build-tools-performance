import React from 'react';
const LABEL_35920 = 'component_35920';
export function Component35920({ value = 35920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35920, 'data-value': derived.doubled }, children);
}
export default Component35920;
