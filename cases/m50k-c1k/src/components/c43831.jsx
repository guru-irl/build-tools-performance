import React from 'react';
const LABEL_43831 = 'component_43831';
export function Component43831({ value = 43831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43831, 'data-value': derived.doubled }, children);
}
export default Component43831;
