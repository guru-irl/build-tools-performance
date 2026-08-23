import React from 'react';
const LABEL_13372 = 'component_13372';
export function Component13372({ value = 13372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13372, 'data-value': derived.doubled }, children);
}
export default Component13372;
