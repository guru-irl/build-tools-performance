import React from 'react';
const LABEL_43534 = 'component_43534';
export function Component43534({ value = 43534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43534, 'data-value': derived.doubled }, children);
}
export default Component43534;
