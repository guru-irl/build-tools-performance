import React from 'react';
const LABEL_40864 = 'component_40864';
export function Component40864({ value = 40864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40864, 'data-value': derived.doubled }, children);
}
export default Component40864;
