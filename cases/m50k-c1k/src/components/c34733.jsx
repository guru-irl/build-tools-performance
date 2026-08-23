import React from 'react';
const LABEL_34733 = 'component_34733';
export function Component34733({ value = 34733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34733, 'data-value': derived.doubled }, children);
}
export default Component34733;
