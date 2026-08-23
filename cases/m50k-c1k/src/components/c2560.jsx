import React from 'react';
const LABEL_2560 = 'component_2560';
export function Component2560({ value = 2560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2560, 'data-value': derived.doubled }, children);
}
export default Component2560;
