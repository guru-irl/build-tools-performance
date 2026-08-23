import React from 'react';
const LABEL_24624 = 'component_24624';
export function Component24624({ value = 24624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24624, 'data-value': derived.doubled }, children);
}
export default Component24624;
