import React from 'react';
const LABEL_43275 = 'component_43275';
export function Component43275({ value = 43275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43275, 'data-value': derived.doubled }, children);
}
export default Component43275;
