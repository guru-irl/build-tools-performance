import React from 'react';
const LABEL_43166 = 'component_43166';
export function Component43166({ value = 43166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43166, 'data-value': derived.doubled }, children);
}
export default Component43166;
