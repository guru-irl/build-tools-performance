import React from 'react';
const LABEL_43279 = 'component_43279';
export function Component43279({ value = 43279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43279, 'data-value': derived.doubled }, children);
}
export default Component43279;
