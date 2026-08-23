import React from 'react';
const LABEL_42804 = 'component_42804';
export function Component42804({ value = 42804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42804, 'data-value': derived.doubled }, children);
}
export default Component42804;
