import React from 'react';
const LABEL_43876 = 'component_43876';
export function Component43876({ value = 43876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43876, 'data-value': derived.doubled }, children);
}
export default Component43876;
