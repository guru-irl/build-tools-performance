import React from 'react';
const LABEL_43425 = 'component_43425';
export function Component43425({ value = 43425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43425, 'data-value': derived.doubled }, children);
}
export default Component43425;
