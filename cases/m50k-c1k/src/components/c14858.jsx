import React from 'react';
const LABEL_14858 = 'component_14858';
export function Component14858({ value = 14858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14858, 'data-value': derived.doubled }, children);
}
export default Component14858;
