import React from 'react';
const LABEL_25052 = 'component_25052';
export function Component25052({ value = 25052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25052, 'data-value': derived.doubled }, children);
}
export default Component25052;
