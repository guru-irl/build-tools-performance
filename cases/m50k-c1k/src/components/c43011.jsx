import React from 'react';
const LABEL_43011 = 'component_43011';
export function Component43011({ value = 43011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43011, 'data-value': derived.doubled }, children);
}
export default Component43011;
