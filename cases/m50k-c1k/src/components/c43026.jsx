import React from 'react';
const LABEL_43026 = 'component_43026';
export function Component43026({ value = 43026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43026, 'data-value': derived.doubled }, children);
}
export default Component43026;
