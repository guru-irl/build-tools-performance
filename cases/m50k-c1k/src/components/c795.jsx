import React from 'react';
const LABEL_795 = 'component_795';
export function Component795({ value = 795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_795, 'data-value': derived.doubled }, children);
}
export default Component795;
