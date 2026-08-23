import React from 'react';
const LABEL_43807 = 'component_43807';
export function Component43807({ value = 43807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43807, 'data-value': derived.doubled }, children);
}
export default Component43807;
