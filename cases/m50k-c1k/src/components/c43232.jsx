import React from 'react';
const LABEL_43232 = 'component_43232';
export function Component43232({ value = 43232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43232, 'data-value': derived.doubled }, children);
}
export default Component43232;
