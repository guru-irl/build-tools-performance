import React from 'react';
const LABEL_43660 = 'component_43660';
export function Component43660({ value = 43660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43660, 'data-value': derived.doubled }, children);
}
export default Component43660;
