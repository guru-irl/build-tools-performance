import React from 'react';
const LABEL_5624 = 'component_5624';
export function Component5624({ value = 5624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5624, 'data-value': derived.doubled }, children);
}
export default Component5624;
