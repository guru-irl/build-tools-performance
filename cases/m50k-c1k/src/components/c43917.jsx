import React from 'react';
const LABEL_43917 = 'component_43917';
export function Component43917({ value = 43917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43917, 'data-value': derived.doubled }, children);
}
export default Component43917;
