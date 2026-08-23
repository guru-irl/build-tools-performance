import React from 'react';
const LABEL_34099 = 'component_34099';
export function Component34099({ value = 34099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34099, 'data-value': derived.doubled }, children);
}
export default Component34099;
