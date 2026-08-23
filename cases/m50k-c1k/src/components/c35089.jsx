import React from 'react';
const LABEL_35089 = 'component_35089';
export function Component35089({ value = 35089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35089, 'data-value': derived.doubled }, children);
}
export default Component35089;
