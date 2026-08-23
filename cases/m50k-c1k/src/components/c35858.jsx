import React from 'react';
const LABEL_35858 = 'component_35858';
export function Component35858({ value = 35858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35858, 'data-value': derived.doubled }, children);
}
export default Component35858;
