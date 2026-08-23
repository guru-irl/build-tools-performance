import React from 'react';
const LABEL_43402 = 'component_43402';
export function Component43402({ value = 43402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43402, 'data-value': derived.doubled }, children);
}
export default Component43402;
