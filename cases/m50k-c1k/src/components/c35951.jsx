import React from 'react';
const LABEL_35951 = 'component_35951';
export function Component35951({ value = 35951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35951, 'data-value': derived.doubled }, children);
}
export default Component35951;
