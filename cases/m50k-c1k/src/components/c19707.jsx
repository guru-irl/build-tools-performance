import React from 'react';
const LABEL_19707 = 'component_19707';
export function Component19707({ value = 19707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19707, 'data-value': derived.doubled }, children);
}
export default Component19707;
