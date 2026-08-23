import React from 'react';
const LABEL_43871 = 'component_43871';
export function Component43871({ value = 43871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43871, 'data-value': derived.doubled }, children);
}
export default Component43871;
