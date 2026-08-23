import React from 'react';
const LABEL_5129 = 'component_5129';
export function Component5129({ value = 5129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5129, 'data-value': derived.doubled }, children);
}
export default Component5129;
