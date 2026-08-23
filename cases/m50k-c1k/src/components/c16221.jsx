import React from 'react';
const LABEL_16221 = 'component_16221';
export function Component16221({ value = 16221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16221, 'data-value': derived.doubled }, children);
}
export default Component16221;
