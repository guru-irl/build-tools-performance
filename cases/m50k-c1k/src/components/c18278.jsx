import React from 'react';
const LABEL_18278 = 'component_18278';
export function Component18278({ value = 18278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18278, 'data-value': derived.doubled }, children);
}
export default Component18278;
