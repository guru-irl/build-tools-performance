import React from 'react';
const LABEL_46635 = 'component_46635';
export function Component46635({ value = 46635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46635, 'data-value': derived.doubled }, children);
}
export default Component46635;
