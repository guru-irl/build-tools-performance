import React from 'react';
const LABEL_34077 = 'component_34077';
export function Component34077({ value = 34077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34077, 'data-value': derived.doubled }, children);
}
export default Component34077;
