import React from 'react';
const LABEL_18577 = 'component_18577';
export function Component18577({ value = 18577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18577, 'data-value': derived.doubled }, children);
}
export default Component18577;
