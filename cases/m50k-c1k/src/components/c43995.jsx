import React from 'react';
const LABEL_43995 = 'component_43995';
export function Component43995({ value = 43995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43995, 'data-value': derived.doubled }, children);
}
export default Component43995;
