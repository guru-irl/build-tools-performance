import React from 'react';
const LABEL_40560 = 'component_40560';
export function Component40560({ value = 40560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40560, 'data-value': derived.doubled }, children);
}
export default Component40560;
