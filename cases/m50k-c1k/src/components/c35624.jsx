import React from 'react';
const LABEL_35624 = 'component_35624';
export function Component35624({ value = 35624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35624, 'data-value': derived.doubled }, children);
}
export default Component35624;
