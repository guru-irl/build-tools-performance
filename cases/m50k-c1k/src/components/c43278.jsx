import React from 'react';
const LABEL_43278 = 'component_43278';
export function Component43278({ value = 43278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43278, 'data-value': derived.doubled }, children);
}
export default Component43278;
