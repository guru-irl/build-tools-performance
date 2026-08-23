import React from 'react';
const LABEL_31632 = 'component_31632';
export function Component31632({ value = 31632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31632, 'data-value': derived.doubled }, children);
}
export default Component31632;
