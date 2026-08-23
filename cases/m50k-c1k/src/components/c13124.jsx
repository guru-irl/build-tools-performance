import React from 'react';
const LABEL_13124 = 'component_13124';
export function Component13124({ value = 13124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13124, 'data-value': derived.doubled }, children);
}
export default Component13124;
