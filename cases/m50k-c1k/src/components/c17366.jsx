import React from 'react';
const LABEL_17366 = 'component_17366';
export function Component17366({ value = 17366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17366, 'data-value': derived.doubled }, children);
}
export default Component17366;
