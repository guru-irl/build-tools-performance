import React from 'react';
const LABEL_43435 = 'component_43435';
export function Component43435({ value = 43435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43435, 'data-value': derived.doubled }, children);
}
export default Component43435;
