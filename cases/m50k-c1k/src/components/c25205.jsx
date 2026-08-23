import React from 'react';
const LABEL_25205 = 'component_25205';
export function Component25205({ value = 25205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25205, 'data-value': derived.doubled }, children);
}
export default Component25205;
