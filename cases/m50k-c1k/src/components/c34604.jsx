import React from 'react';
const LABEL_34604 = 'component_34604';
export function Component34604({ value = 34604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34604, 'data-value': derived.doubled }, children);
}
export default Component34604;
