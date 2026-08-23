import React from 'react';
const LABEL_28260 = 'component_28260';
export function Component28260({ value = 28260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28260, 'data-value': derived.doubled }, children);
}
export default Component28260;
