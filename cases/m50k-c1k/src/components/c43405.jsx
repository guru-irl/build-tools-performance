import React from 'react';
const LABEL_43405 = 'component_43405';
export function Component43405({ value = 43405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43405, 'data-value': derived.doubled }, children);
}
export default Component43405;
