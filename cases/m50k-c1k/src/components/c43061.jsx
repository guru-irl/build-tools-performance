import React from 'react';
const LABEL_43061 = 'component_43061';
export function Component43061({ value = 43061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43061, 'data-value': derived.doubled }, children);
}
export default Component43061;
