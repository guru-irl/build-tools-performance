import React from 'react';
const LABEL_43559 = 'component_43559';
export function Component43559({ value = 43559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43559, 'data-value': derived.doubled }, children);
}
export default Component43559;
