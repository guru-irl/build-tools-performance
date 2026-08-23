import React from 'react';
const LABEL_38606 = 'component_38606';
export function Component38606({ value = 38606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38606, 'data-value': derived.doubled }, children);
}
export default Component38606;
