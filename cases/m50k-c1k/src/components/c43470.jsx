import React from 'react';
const LABEL_43470 = 'component_43470';
export function Component43470({ value = 43470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43470, 'data-value': derived.doubled }, children);
}
export default Component43470;
