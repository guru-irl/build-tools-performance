import React from 'react';
const LABEL_43883 = 'component_43883';
export function Component43883({ value = 43883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43883, 'data-value': derived.doubled }, children);
}
export default Component43883;
