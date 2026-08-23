import React from 'react';
const LABEL_43342 = 'component_43342';
export function Component43342({ value = 43342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43342, 'data-value': derived.doubled }, children);
}
export default Component43342;
