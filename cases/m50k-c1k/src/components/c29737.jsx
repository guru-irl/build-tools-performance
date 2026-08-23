import React from 'react';
const LABEL_29737 = 'component_29737';
export function Component29737({ value = 29737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29737, 'data-value': derived.doubled }, children);
}
export default Component29737;
