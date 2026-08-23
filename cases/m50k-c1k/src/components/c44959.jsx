import React from 'react';
const LABEL_44959 = 'component_44959';
export function Component44959({ value = 44959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44959, 'data-value': derived.doubled }, children);
}
export default Component44959;
