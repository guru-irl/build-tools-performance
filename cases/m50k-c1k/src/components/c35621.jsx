import React from 'react';
const LABEL_35621 = 'component_35621';
export function Component35621({ value = 35621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35621, 'data-value': derived.doubled }, children);
}
export default Component35621;
