import React from 'react';
const LABEL_43909 = 'component_43909';
export function Component43909({ value = 43909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43909, 'data-value': derived.doubled }, children);
}
export default Component43909;
