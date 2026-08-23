import React from 'react';
const LABEL_19508 = 'component_19508';
export function Component19508({ value = 19508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19508, 'data-value': derived.doubled }, children);
}
export default Component19508;
