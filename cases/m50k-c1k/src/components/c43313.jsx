import React from 'react';
const LABEL_43313 = 'component_43313';
export function Component43313({ value = 43313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43313, 'data-value': derived.doubled }, children);
}
export default Component43313;
