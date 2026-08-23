import React from 'react';
const LABEL_34624 = 'component_34624';
export function Component34624({ value = 34624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34624, 'data-value': derived.doubled }, children);
}
export default Component34624;
