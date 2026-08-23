import React from 'react';
const LABEL_43001 = 'component_43001';
export function Component43001({ value = 43001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43001, 'data-value': derived.doubled }, children);
}
export default Component43001;
