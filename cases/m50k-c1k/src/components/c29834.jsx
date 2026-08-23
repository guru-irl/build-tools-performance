import React from 'react';
const LABEL_29834 = 'component_29834';
export function Component29834({ value = 29834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29834, 'data-value': derived.doubled }, children);
}
export default Component29834;
