import React from 'react';
const LABEL_43467 = 'component_43467';
export function Component43467({ value = 43467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43467, 'data-value': derived.doubled }, children);
}
export default Component43467;
