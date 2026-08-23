import React from 'react';
const LABEL_43012 = 'component_43012';
export function Component43012({ value = 43012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43012, 'data-value': derived.doubled }, children);
}
export default Component43012;
