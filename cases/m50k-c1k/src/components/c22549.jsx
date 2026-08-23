import React from 'react';
const LABEL_22549 = 'component_22549';
export function Component22549({ value = 22549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22549, 'data-value': derived.doubled }, children);
}
export default Component22549;
