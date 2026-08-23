import React from 'react';
const LABEL_43734 = 'component_43734';
export function Component43734({ value = 43734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43734, 'data-value': derived.doubled }, children);
}
export default Component43734;
