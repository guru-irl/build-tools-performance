import React from 'react';
const LABEL_43814 = 'component_43814';
export function Component43814({ value = 43814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43814, 'data-value': derived.doubled }, children);
}
export default Component43814;
