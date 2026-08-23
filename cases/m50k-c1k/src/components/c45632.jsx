import React from 'react';
const LABEL_45632 = 'component_45632';
export function Component45632({ value = 45632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45632, 'data-value': derived.doubled }, children);
}
export default Component45632;
