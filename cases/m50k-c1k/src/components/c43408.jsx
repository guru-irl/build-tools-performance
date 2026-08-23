import React from 'react';
const LABEL_43408 = 'component_43408';
export function Component43408({ value = 43408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43408, 'data-value': derived.doubled }, children);
}
export default Component43408;
