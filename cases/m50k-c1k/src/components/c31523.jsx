import React from 'react';
const LABEL_31523 = 'component_31523';
export function Component31523({ value = 31523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31523, 'data-value': derived.doubled }, children);
}
export default Component31523;
