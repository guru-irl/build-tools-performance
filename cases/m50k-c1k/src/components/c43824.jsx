import React from 'react';
const LABEL_43824 = 'component_43824';
export function Component43824({ value = 43824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43824, 'data-value': derived.doubled }, children);
}
export default Component43824;
