import React from 'react';
const LABEL_43584 = 'component_43584';
export function Component43584({ value = 43584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43584, 'data-value': derived.doubled }, children);
}
export default Component43584;
