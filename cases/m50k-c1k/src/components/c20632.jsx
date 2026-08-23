import React from 'react';
const LABEL_20632 = 'component_20632';
export function Component20632({ value = 20632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20632, 'data-value': derived.doubled }, children);
}
export default Component20632;
