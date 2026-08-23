import React from 'react';
const LABEL_43666 = 'component_43666';
export function Component43666({ value = 43666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43666, 'data-value': derived.doubled }, children);
}
export default Component43666;
