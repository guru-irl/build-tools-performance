import React from 'react';
const LABEL_46795 = 'component_46795';
export function Component46795({ value = 46795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46795, 'data-value': derived.doubled }, children);
}
export default Component46795;
