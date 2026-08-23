import React from 'react';
const LABEL_43846 = 'component_43846';
export function Component43846({ value = 43846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43846, 'data-value': derived.doubled }, children);
}
export default Component43846;
