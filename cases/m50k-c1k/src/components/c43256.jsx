import React from 'react';
const LABEL_43256 = 'component_43256';
export function Component43256({ value = 43256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43256, 'data-value': derived.doubled }, children);
}
export default Component43256;
