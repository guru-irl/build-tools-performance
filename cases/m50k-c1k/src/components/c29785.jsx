import React from 'react';
const LABEL_29785 = 'component_29785';
export function Component29785({ value = 29785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29785, 'data-value': derived.doubled }, children);
}
export default Component29785;
