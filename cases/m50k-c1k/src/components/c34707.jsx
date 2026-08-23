import React from 'react';
const LABEL_34707 = 'component_34707';
export function Component34707({ value = 34707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34707, 'data-value': derived.doubled }, children);
}
export default Component34707;
