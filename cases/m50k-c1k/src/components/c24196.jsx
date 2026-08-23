import React from 'react';
const LABEL_24196 = 'component_24196';
export function Component24196({ value = 24196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24196, 'data-value': derived.doubled }, children);
}
export default Component24196;
