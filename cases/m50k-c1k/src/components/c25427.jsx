import React from 'react';
const LABEL_25427 = 'component_25427';
export function Component25427({ value = 25427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25427, 'data-value': derived.doubled }, children);
}
export default Component25427;
