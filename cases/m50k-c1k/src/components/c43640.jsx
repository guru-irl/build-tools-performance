import React from 'react';
const LABEL_43640 = 'component_43640';
export function Component43640({ value = 43640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43640, 'data-value': derived.doubled }, children);
}
export default Component43640;
