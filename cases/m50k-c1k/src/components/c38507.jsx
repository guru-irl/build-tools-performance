import React from 'react';
const LABEL_38507 = 'component_38507';
export function Component38507({ value = 38507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38507, 'data-value': derived.doubled }, children);
}
export default Component38507;
