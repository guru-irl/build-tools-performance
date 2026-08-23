import React from 'react';
const LABEL_43577 = 'component_43577';
export function Component43577({ value = 43577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43577, 'data-value': derived.doubled }, children);
}
export default Component43577;
