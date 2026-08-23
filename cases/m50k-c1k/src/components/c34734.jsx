import React from 'react';
const LABEL_34734 = 'component_34734';
export function Component34734({ value = 34734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34734, 'data-value': derived.doubled }, children);
}
export default Component34734;
