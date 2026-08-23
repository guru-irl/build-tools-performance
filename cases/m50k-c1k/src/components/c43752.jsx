import React from 'react';
const LABEL_43752 = 'component_43752';
export function Component43752({ value = 43752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43752, 'data-value': derived.doubled }, children);
}
export default Component43752;
