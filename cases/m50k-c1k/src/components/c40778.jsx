import React from 'react';
const LABEL_40778 = 'component_40778';
export function Component40778({ value = 40778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40778, 'data-value': derived.doubled }, children);
}
export default Component40778;
