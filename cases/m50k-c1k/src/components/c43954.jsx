import React from 'react';
const LABEL_43954 = 'component_43954';
export function Component43954({ value = 43954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43954, 'data-value': derived.doubled }, children);
}
export default Component43954;
