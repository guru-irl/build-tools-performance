import React from 'react';
const LABEL_43261 = 'component_43261';
export function Component43261({ value = 43261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43261, 'data-value': derived.doubled }, children);
}
export default Component43261;
