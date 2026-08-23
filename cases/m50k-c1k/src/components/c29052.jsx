import React from 'react';
const LABEL_29052 = 'component_29052';
export function Component29052({ value = 29052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29052, 'data-value': derived.doubled }, children);
}
export default Component29052;
