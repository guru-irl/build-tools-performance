import React from 'react';
const LABEL_43920 = 'component_43920';
export function Component43920({ value = 43920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43920, 'data-value': derived.doubled }, children);
}
export default Component43920;
