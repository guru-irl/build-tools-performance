import React from 'react';
const LABEL_43329 = 'component_43329';
export function Component43329({ value = 43329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43329, 'data-value': derived.doubled }, children);
}
export default Component43329;
