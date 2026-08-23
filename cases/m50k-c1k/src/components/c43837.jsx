import React from 'react';
const LABEL_43837 = 'component_43837';
export function Component43837({ value = 43837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43837, 'data-value': derived.doubled }, children);
}
export default Component43837;
