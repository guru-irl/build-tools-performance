import React from 'react';
const LABEL_927 = 'component_927';
export function Component927({ value = 927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_927, 'data-value': derived.doubled }, children);
}
export default Component927;
