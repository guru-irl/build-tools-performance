import React from 'react';
const LABEL_42537 = 'component_42537';
export function Component42537({ value = 42537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42537, 'data-value': derived.doubled }, children);
}
export default Component42537;
