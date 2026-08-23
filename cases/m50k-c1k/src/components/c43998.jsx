import React from 'react';
const LABEL_43998 = 'component_43998';
export function Component43998({ value = 43998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43998, 'data-value': derived.doubled }, children);
}
export default Component43998;
