import React from 'react';
const LABEL_19196 = 'component_19196';
export function Component19196({ value = 19196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19196, 'data-value': derived.doubled }, children);
}
export default Component19196;
