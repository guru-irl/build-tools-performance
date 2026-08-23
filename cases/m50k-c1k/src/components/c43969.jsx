import React from 'react';
const LABEL_43969 = 'component_43969';
export function Component43969({ value = 43969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43969, 'data-value': derived.doubled }, children);
}
export default Component43969;
