import React from 'react';
const LABEL_18783 = 'component_18783';
export function Component18783({ value = 18783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18783, 'data-value': derived.doubled }, children);
}
export default Component18783;
