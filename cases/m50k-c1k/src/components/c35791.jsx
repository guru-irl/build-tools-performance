import React from 'react';
const LABEL_35791 = 'component_35791';
export function Component35791({ value = 35791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35791, 'data-value': derived.doubled }, children);
}
export default Component35791;
