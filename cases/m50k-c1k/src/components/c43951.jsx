import React from 'react';
const LABEL_43951 = 'component_43951';
export function Component43951({ value = 43951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43951, 'data-value': derived.doubled }, children);
}
export default Component43951;
