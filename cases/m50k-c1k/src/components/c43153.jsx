import React from 'react';
const LABEL_43153 = 'component_43153';
export function Component43153({ value = 43153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43153, 'data-value': derived.doubled }, children);
}
export default Component43153;
