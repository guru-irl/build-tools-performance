import React from 'react';
const LABEL_38132 = 'component_38132';
export function Component38132({ value = 38132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38132, 'data-value': derived.doubled }, children);
}
export default Component38132;
