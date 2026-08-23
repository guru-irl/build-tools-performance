import React from 'react';
const LABEL_26632 = 'component_26632';
export function Component26632({ value = 26632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26632, 'data-value': derived.doubled }, children);
}
export default Component26632;
