import React from 'react';
const LABEL_14795 = 'component_14795';
export function Component14795({ value = 14795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14795, 'data-value': derived.doubled }, children);
}
export default Component14795;
