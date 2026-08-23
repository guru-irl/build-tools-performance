import React from 'react';
const LABEL_29338 = 'component_29338';
export function Component29338({ value = 29338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29338, 'data-value': derived.doubled }, children);
}
export default Component29338;
