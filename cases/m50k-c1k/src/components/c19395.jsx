import React from 'react';
const LABEL_19395 = 'component_19395';
export function Component19395({ value = 19395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19395, 'data-value': derived.doubled }, children);
}
export default Component19395;
