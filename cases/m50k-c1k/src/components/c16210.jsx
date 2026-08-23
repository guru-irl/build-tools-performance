import React from 'react';
const LABEL_16210 = 'component_16210';
export function Component16210({ value = 16210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16210, 'data-value': derived.doubled }, children);
}
export default Component16210;
