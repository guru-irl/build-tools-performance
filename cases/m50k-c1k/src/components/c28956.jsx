import React from 'react';
const LABEL_28956 = 'component_28956';
export function Component28956({ value = 28956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28956, 'data-value': derived.doubled }, children);
}
export default Component28956;
