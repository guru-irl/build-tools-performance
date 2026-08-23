import React from 'react';
const LABEL_43881 = 'component_43881';
export function Component43881({ value = 43881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43881, 'data-value': derived.doubled }, children);
}
export default Component43881;
