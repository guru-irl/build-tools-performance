import React from 'react';
const LABEL_43176 = 'component_43176';
export function Component43176({ value = 43176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43176, 'data-value': derived.doubled }, children);
}
export default Component43176;
