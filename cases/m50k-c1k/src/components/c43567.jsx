import React from 'react';
const LABEL_43567 = 'component_43567';
export function Component43567({ value = 43567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43567, 'data-value': derived.doubled }, children);
}
export default Component43567;
