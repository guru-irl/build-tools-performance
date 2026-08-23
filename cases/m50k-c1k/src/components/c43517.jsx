import React from 'react';
const LABEL_43517 = 'component_43517';
export function Component43517({ value = 43517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43517, 'data-value': derived.doubled }, children);
}
export default Component43517;
