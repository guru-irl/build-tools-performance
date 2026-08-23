import React from 'react';
const LABEL_43525 = 'component_43525';
export function Component43525({ value = 43525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43525, 'data-value': derived.doubled }, children);
}
export default Component43525;
