import React from 'react';
const LABEL_16202 = 'component_16202';
export function Component16202({ value = 16202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16202, 'data-value': derived.doubled }, children);
}
export default Component16202;
