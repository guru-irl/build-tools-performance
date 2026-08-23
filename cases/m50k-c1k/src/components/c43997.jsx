import React from 'react';
const LABEL_43997 = 'component_43997';
export function Component43997({ value = 43997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43997, 'data-value': derived.doubled }, children);
}
export default Component43997;
