import React from 'react';
const LABEL_43324 = 'component_43324';
export function Component43324({ value = 43324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43324, 'data-value': derived.doubled }, children);
}
export default Component43324;
