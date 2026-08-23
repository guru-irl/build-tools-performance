import React from 'react';
const LABEL_22929 = 'component_22929';
export function Component22929({ value = 22929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22929, 'data-value': derived.doubled }, children);
}
export default Component22929;
