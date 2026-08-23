import React from 'react';
const LABEL_43772 = 'component_43772';
export function Component43772({ value = 43772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43772, 'data-value': derived.doubled }, children);
}
export default Component43772;
