import React from 'react';
const LABEL_43676 = 'component_43676';
export function Component43676({ value = 43676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43676, 'data-value': derived.doubled }, children);
}
export default Component43676;
