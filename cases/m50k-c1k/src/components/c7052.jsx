import React from 'react';
const LABEL_7052 = 'component_7052';
export function Component7052({ value = 7052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7052, 'data-value': derived.doubled }, children);
}
export default Component7052;
