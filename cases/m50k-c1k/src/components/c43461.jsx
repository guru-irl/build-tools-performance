import React from 'react';
const LABEL_43461 = 'component_43461';
export function Component43461({ value = 43461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43461, 'data-value': derived.doubled }, children);
}
export default Component43461;
