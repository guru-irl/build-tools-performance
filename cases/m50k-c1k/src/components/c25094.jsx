import React from 'react';
const LABEL_25094 = 'component_25094';
export function Component25094({ value = 25094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25094, 'data-value': derived.doubled }, children);
}
export default Component25094;
