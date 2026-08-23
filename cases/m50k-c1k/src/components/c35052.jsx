import React from 'react';
const LABEL_35052 = 'component_35052';
export function Component35052({ value = 35052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35052, 'data-value': derived.doubled }, children);
}
export default Component35052;
