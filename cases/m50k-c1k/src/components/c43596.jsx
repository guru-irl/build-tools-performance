import React from 'react';
const LABEL_43596 = 'component_43596';
export function Component43596({ value = 43596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43596, 'data-value': derived.doubled }, children);
}
export default Component43596;
