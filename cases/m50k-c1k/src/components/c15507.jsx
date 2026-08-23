import React from 'react';
const LABEL_15507 = 'component_15507';
export function Component15507({ value = 15507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15507, 'data-value': derived.doubled }, children);
}
export default Component15507;
