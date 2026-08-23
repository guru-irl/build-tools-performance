import React from 'react';
const LABEL_13795 = 'component_13795';
export function Component13795({ value = 13795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13795, 'data-value': derived.doubled }, children);
}
export default Component13795;
