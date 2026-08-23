import React from 'react';
const LABEL_34353 = 'component_34353';
export function Component34353({ value = 34353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34353, 'data-value': derived.doubled }, children);
}
export default Component34353;
