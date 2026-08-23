import React from 'react';
const LABEL_43682 = 'component_43682';
export function Component43682({ value = 43682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43682, 'data-value': derived.doubled }, children);
}
export default Component43682;
