import React from 'react';
const LABEL_43355 = 'component_43355';
export function Component43355({ value = 43355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43355, 'data-value': derived.doubled }, children);
}
export default Component43355;
