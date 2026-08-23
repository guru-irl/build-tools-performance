import React from 'react';
const LABEL_22858 = 'component_22858';
export function Component22858({ value = 22858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22858, 'data-value': derived.doubled }, children);
}
export default Component22858;
