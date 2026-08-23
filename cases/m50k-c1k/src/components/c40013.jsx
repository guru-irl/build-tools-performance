import React from 'react';
const LABEL_40013 = 'component_40013';
export function Component40013({ value = 40013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40013, 'data-value': derived.doubled }, children);
}
export default Component40013;
