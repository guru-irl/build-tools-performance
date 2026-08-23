import React from 'react';
const LABEL_43511 = 'component_43511';
export function Component43511({ value = 43511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43511, 'data-value': derived.doubled }, children);
}
export default Component43511;
