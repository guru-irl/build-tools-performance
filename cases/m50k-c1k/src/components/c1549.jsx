import React from 'react';
const LABEL_1549 = 'component_1549';
export function Component1549({ value = 1549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1549, 'data-value': derived.doubled }, children);
}
export default Component1549;
