import React from 'react';
const LABEL_43105 = 'component_43105';
export function Component43105({ value = 43105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43105, 'data-value': derived.doubled }, children);
}
export default Component43105;
