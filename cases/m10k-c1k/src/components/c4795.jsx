import React from 'react';
const LABEL_4795 = 'component_4795';
export function Component4795({ value = 4795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4795, 'data-value': derived.doubled }, children);
}
export default Component4795;
