import React from 'react';
const LABEL_43361 = 'component_43361';
export function Component43361({ value = 43361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43361, 'data-value': derived.doubled }, children);
}
export default Component43361;
