import React from 'react';
const LABEL_36654 = 'component_36654';
export function Component36654({ value = 36654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36654, 'data-value': derived.doubled }, children);
}
export default Component36654;
