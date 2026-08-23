import React from 'react';
const LABEL_4694 = 'component_4694';
export function Component4694({ value = 4694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4694, 'data-value': derived.doubled }, children);
}
export default Component4694;
