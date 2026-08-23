import React from 'react';
const LABEL_43894 = 'component_43894';
export function Component43894({ value = 43894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43894, 'data-value': derived.doubled }, children);
}
export default Component43894;
