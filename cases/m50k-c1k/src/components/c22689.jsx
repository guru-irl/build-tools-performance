import React from 'react';
const LABEL_22689 = 'component_22689';
export function Component22689({ value = 22689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22689, 'data-value': derived.doubled }, children);
}
export default Component22689;
