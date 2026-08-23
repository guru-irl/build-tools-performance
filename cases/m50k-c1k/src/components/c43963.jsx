import React from 'react';
const LABEL_43963 = 'component_43963';
export function Component43963({ value = 43963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43963, 'data-value': derived.doubled }, children);
}
export default Component43963;
