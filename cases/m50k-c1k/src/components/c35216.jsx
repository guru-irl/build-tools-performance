import React from 'react';
const LABEL_35216 = 'component_35216';
export function Component35216({ value = 35216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35216, 'data-value': derived.doubled }, children);
}
export default Component35216;
