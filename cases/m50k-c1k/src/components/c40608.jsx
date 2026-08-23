import React from 'react';
const LABEL_40608 = 'component_40608';
export function Component40608({ value = 40608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40608, 'data-value': derived.doubled }, children);
}
export default Component40608;
