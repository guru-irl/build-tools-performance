import React from 'react';
const LABEL_25643 = 'component_25643';
export function Component25643({ value = 25643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25643, 'data-value': derived.doubled }, children);
}
export default Component25643;
