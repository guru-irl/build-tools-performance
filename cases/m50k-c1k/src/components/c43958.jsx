import React from 'react';
const LABEL_43958 = 'component_43958';
export function Component43958({ value = 43958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43958, 'data-value': derived.doubled }, children);
}
export default Component43958;
