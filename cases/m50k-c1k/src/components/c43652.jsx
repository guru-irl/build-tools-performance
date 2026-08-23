import React from 'react';
const LABEL_43652 = 'component_43652';
export function Component43652({ value = 43652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43652, 'data-value': derived.doubled }, children);
}
export default Component43652;
