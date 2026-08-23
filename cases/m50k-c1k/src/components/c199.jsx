import React from 'react';
const LABEL_199 = 'component_199';
export function Component199({ value = 199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_199, 'data-value': derived.doubled }, children);
}
export default Component199;
