import React from 'react';
const LABEL_40940 = 'component_40940';
export function Component40940({ value = 40940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40940, 'data-value': derived.doubled }, children);
}
export default Component40940;
