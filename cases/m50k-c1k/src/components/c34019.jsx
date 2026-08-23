import React from 'react';
const LABEL_34019 = 'component_34019';
export function Component34019({ value = 34019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34019, 'data-value': derived.doubled }, children);
}
export default Component34019;
