import React from 'react';
const LABEL_43582 = 'component_43582';
export function Component43582({ value = 43582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43582, 'data-value': derived.doubled }, children);
}
export default Component43582;
