import React from 'react';
const LABEL_25221 = 'component_25221';
export function Component25221({ value = 25221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25221, 'data-value': derived.doubled }, children);
}
export default Component25221;
