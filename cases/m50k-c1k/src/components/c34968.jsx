import React from 'react';
const LABEL_34968 = 'component_34968';
export function Component34968({ value = 34968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34968, 'data-value': derived.doubled }, children);
}
export default Component34968;
