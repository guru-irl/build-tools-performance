import React from 'react';
const LABEL_29697 = 'component_29697';
export function Component29697({ value = 29697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29697, 'data-value': derived.doubled }, children);
}
export default Component29697;
