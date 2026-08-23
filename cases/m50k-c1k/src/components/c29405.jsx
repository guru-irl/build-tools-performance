import React from 'react';
const LABEL_29405 = 'component_29405';
export function Component29405({ value = 29405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29405, 'data-value': derived.doubled }, children);
}
export default Component29405;
