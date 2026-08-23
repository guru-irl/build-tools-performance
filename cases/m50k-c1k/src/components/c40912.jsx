import React from 'react';
const LABEL_40912 = 'component_40912';
export function Component40912({ value = 40912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40912, 'data-value': derived.doubled }, children);
}
export default Component40912;
