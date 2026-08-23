import React from 'react';
const LABEL_5507 = 'component_5507';
export function Component5507({ value = 5507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5507, 'data-value': derived.doubled }, children);
}
export default Component5507;
