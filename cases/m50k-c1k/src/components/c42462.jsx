import React from 'react';
const LABEL_42462 = 'component_42462';
export function Component42462({ value = 42462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42462, 'data-value': derived.doubled }, children);
}
export default Component42462;
