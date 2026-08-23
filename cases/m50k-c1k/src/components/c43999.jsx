import React from 'react';
const LABEL_43999 = 'component_43999';
export function Component43999({ value = 43999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43999, 'data-value': derived.doubled }, children);
}
export default Component43999;
