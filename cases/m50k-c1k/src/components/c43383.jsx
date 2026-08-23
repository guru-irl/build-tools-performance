import React from 'react';
const LABEL_43383 = 'component_43383';
export function Component43383({ value = 43383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43383, 'data-value': derived.doubled }, children);
}
export default Component43383;
