import React from 'react';
const LABEL_43643 = 'component_43643';
export function Component43643({ value = 43643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43643, 'data-value': derived.doubled }, children);
}
export default Component43643;
