import React from 'react';
const LABEL_43411 = 'component_43411';
export function Component43411({ value = 43411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43411, 'data-value': derived.doubled }, children);
}
export default Component43411;
