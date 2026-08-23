import React from 'react';
const LABEL_35486 = 'component_35486';
export function Component35486({ value = 35486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35486, 'data-value': derived.doubled }, children);
}
export default Component35486;
