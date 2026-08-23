import React from 'react';
const LABEL_43143 = 'component_43143';
export function Component43143({ value = 43143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43143, 'data-value': derived.doubled }, children);
}
export default Component43143;
