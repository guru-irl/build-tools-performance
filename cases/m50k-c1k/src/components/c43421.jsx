import React from 'react';
const LABEL_43421 = 'component_43421';
export function Component43421({ value = 43421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43421, 'data-value': derived.doubled }, children);
}
export default Component43421;
