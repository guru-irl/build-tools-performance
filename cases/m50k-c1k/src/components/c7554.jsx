import React from 'react';
const LABEL_7554 = 'component_7554';
export function Component7554({ value = 7554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7554, 'data-value': derived.doubled }, children);
}
export default Component7554;
