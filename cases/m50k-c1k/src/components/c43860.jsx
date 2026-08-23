import React from 'react';
const LABEL_43860 = 'component_43860';
export function Component43860({ value = 43860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43860, 'data-value': derived.doubled }, children);
}
export default Component43860;
