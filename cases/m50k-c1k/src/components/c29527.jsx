import React from 'react';
const LABEL_29527 = 'component_29527';
export function Component29527({ value = 29527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29527, 'data-value': derived.doubled }, children);
}
export default Component29527;
