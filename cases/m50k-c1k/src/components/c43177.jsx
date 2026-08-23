import React from 'react';
const LABEL_43177 = 'component_43177';
export function Component43177({ value = 43177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43177, 'data-value': derived.doubled }, children);
}
export default Component43177;
