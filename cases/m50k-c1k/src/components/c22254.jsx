import React from 'react';
const LABEL_22254 = 'component_22254';
export function Component22254({ value = 22254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22254, 'data-value': derived.doubled }, children);
}
export default Component22254;
