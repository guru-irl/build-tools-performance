import React from 'react';
const LABEL_5632 = 'component_5632';
export function Component5632({ value = 5632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5632, 'data-value': derived.doubled }, children);
}
export default Component5632;
