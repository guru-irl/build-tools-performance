import React from 'react';
const LABEL_43407 = 'component_43407';
export function Component43407({ value = 43407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43407, 'data-value': derived.doubled }, children);
}
export default Component43407;
