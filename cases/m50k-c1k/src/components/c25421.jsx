import React from 'react';
const LABEL_25421 = 'component_25421';
export function Component25421({ value = 25421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25421, 'data-value': derived.doubled }, children);
}
export default Component25421;
