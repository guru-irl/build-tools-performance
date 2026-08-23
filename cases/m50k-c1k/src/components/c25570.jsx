import React from 'react';
const LABEL_25570 = 'component_25570';
export function Component25570({ value = 25570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25570, 'data-value': derived.doubled }, children);
}
export default Component25570;
