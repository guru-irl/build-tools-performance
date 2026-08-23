import React from 'react';
const LABEL_25212 = 'component_25212';
export function Component25212({ value = 25212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25212, 'data-value': derived.doubled }, children);
}
export default Component25212;
