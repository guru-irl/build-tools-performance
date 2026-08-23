import React from 'react';
const LABEL_43359 = 'component_43359';
export function Component43359({ value = 43359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43359, 'data-value': derived.doubled }, children);
}
export default Component43359;
