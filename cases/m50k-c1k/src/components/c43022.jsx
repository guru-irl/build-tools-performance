import React from 'react';
const LABEL_43022 = 'component_43022';
export function Component43022({ value = 43022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43022, 'data-value': derived.doubled }, children);
}
export default Component43022;
