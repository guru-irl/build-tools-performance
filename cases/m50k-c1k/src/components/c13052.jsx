import React from 'react';
const LABEL_13052 = 'component_13052';
export function Component13052({ value = 13052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13052, 'data-value': derived.doubled }, children);
}
export default Component13052;
