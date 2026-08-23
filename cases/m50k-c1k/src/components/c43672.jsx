import React from 'react';
const LABEL_43672 = 'component_43672';
export function Component43672({ value = 43672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43672, 'data-value': derived.doubled }, children);
}
export default Component43672;
