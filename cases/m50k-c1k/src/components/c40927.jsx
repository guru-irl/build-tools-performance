import React from 'react';
const LABEL_40927 = 'component_40927';
export function Component40927({ value = 40927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40927, 'data-value': derived.doubled }, children);
}
export default Component40927;
