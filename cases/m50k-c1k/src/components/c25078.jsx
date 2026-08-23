import React from 'react';
const LABEL_25078 = 'component_25078';
export function Component25078({ value = 25078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25078, 'data-value': derived.doubled }, children);
}
export default Component25078;
