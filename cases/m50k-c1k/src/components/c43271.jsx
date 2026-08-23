import React from 'react';
const LABEL_43271 = 'component_43271';
export function Component43271({ value = 43271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43271, 'data-value': derived.doubled }, children);
}
export default Component43271;
