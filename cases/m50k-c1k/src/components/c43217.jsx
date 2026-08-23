import React from 'react';
const LABEL_43217 = 'component_43217';
export function Component43217({ value = 43217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43217, 'data-value': derived.doubled }, children);
}
export default Component43217;
