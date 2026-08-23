import React from 'react';
const LABEL_43645 = 'component_43645';
export function Component43645({ value = 43645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43645, 'data-value': derived.doubled }, children);
}
export default Component43645;
