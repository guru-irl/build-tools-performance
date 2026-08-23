import React from 'react';
const LABEL_5212 = 'component_5212';
export function Component5212({ value = 5212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5212, 'data-value': derived.doubled }, children);
}
export default Component5212;
