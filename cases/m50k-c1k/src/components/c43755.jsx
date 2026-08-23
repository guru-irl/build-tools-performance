import React from 'react';
const LABEL_43755 = 'component_43755';
export function Component43755({ value = 43755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43755, 'data-value': derived.doubled }, children);
}
export default Component43755;
