import React from 'react';
const LABEL_34318 = 'component_34318';
export function Component34318({ value = 34318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34318, 'data-value': derived.doubled }, children);
}
export default Component34318;
