import React from 'react';
const LABEL_10905 = 'component_10905';
export function Component10905({ value = 10905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10905, 'data-value': derived.doubled }, children);
}
export default Component10905;
