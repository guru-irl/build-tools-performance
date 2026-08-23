import React from 'react';
const LABEL_25707 = 'component_25707';
export function Component25707({ value = 25707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25707, 'data-value': derived.doubled }, children);
}
export default Component25707;
