import React from 'react';
const LABEL_24350 = 'component_24350';
export function Component24350({ value = 24350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24350, 'data-value': derived.doubled }, children);
}
export default Component24350;
