import React from 'react';
const LABEL_43639 = 'component_43639';
export function Component43639({ value = 43639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43639, 'data-value': derived.doubled }, children);
}
export default Component43639;
