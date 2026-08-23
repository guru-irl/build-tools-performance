import React from 'react';
const LABEL_34365 = 'component_34365';
export function Component34365({ value = 34365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34365, 'data-value': derived.doubled }, children);
}
export default Component34365;
