import React from 'react';
const LABEL_26955 = 'component_26955';
export function Component26955({ value = 26955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26955, 'data-value': derived.doubled }, children);
}
export default Component26955;
