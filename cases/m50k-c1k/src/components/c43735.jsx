import React from 'react';
const LABEL_43735 = 'component_43735';
export function Component43735({ value = 43735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43735, 'data-value': derived.doubled }, children);
}
export default Component43735;
