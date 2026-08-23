import React from 'react';
const LABEL_43140 = 'component_43140';
export function Component43140({ value = 43140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43140, 'data-value': derived.doubled }, children);
}
export default Component43140;
