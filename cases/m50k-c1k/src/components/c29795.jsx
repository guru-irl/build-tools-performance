import React from 'react';
const LABEL_29795 = 'component_29795';
export function Component29795({ value = 29795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29795, 'data-value': derived.doubled }, children);
}
export default Component29795;
