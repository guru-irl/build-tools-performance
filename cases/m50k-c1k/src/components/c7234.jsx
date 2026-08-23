import React from 'react';
const LABEL_7234 = 'component_7234';
export function Component7234({ value = 7234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7234, 'data-value': derived.doubled }, children);
}
export default Component7234;
