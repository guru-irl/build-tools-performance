import React from 'react';
const LABEL_35211 = 'component_35211';
export function Component35211({ value = 35211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35211, 'data-value': derived.doubled }, children);
}
export default Component35211;
