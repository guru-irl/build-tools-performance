import React from 'react';
const LABEL_25562 = 'component_25562';
export function Component25562({ value = 25562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25562, 'data-value': derived.doubled }, children);
}
export default Component25562;
