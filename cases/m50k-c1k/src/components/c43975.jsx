import React from 'react';
const LABEL_43975 = 'component_43975';
export function Component43975({ value = 43975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43975, 'data-value': derived.doubled }, children);
}
export default Component43975;
