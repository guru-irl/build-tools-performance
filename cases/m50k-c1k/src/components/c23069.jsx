import React from 'react';
const LABEL_23069 = 'component_23069';
export function Component23069({ value = 23069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23069, 'data-value': derived.doubled }, children);
}
export default Component23069;
