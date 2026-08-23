import React from 'react';
const LABEL_5773 = 'component_5773';
export function Component5773({ value = 5773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5773, 'data-value': derived.doubled }, children);
}
export default Component5773;
