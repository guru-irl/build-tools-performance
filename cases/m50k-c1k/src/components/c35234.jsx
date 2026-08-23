import React from 'react';
const LABEL_35234 = 'component_35234';
export function Component35234({ value = 35234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35234, 'data-value': derived.doubled }, children);
}
export default Component35234;
