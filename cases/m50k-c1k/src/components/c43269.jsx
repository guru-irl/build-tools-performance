import React from 'react';
const LABEL_43269 = 'component_43269';
export function Component43269({ value = 43269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43269, 'data-value': derived.doubled }, children);
}
export default Component43269;
