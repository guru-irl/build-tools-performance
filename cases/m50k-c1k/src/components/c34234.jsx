import React from 'react';
const LABEL_34234 = 'component_34234';
export function Component34234({ value = 34234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34234, 'data-value': derived.doubled }, children);
}
export default Component34234;
