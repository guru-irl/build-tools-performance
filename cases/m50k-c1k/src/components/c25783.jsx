import React from 'react';
const LABEL_25783 = 'component_25783';
export function Component25783({ value = 25783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25783, 'data-value': derived.doubled }, children);
}
export default Component25783;
