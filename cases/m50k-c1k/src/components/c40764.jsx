import React from 'react';
const LABEL_40764 = 'component_40764';
export function Component40764({ value = 40764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40764, 'data-value': derived.doubled }, children);
}
export default Component40764;
