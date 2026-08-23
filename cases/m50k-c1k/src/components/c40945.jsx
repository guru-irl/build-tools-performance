import React from 'react';
const LABEL_40945 = 'component_40945';
export function Component40945({ value = 40945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40945, 'data-value': derived.doubled }, children);
}
export default Component40945;
