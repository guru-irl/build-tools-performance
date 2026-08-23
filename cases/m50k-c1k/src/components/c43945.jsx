import React from 'react';
const LABEL_43945 = 'component_43945';
export function Component43945({ value = 43945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43945, 'data-value': derived.doubled }, children);
}
export default Component43945;
