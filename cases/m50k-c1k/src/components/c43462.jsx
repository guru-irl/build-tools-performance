import React from 'react';
const LABEL_43462 = 'component_43462';
export function Component43462({ value = 43462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43462, 'data-value': derived.doubled }, children);
}
export default Component43462;
