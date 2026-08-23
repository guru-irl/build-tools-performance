import React from 'react';
const LABEL_8145 = 'component_8145';
export function Component8145({ value = 8145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8145, 'data-value': derived.doubled }, children);
}
export default Component8145;
