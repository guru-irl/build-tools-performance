import React from 'react';
const LABEL_43375 = 'component_43375';
export function Component43375({ value = 43375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43375, 'data-value': derived.doubled }, children);
}
export default Component43375;
