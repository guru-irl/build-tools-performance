import React from 'react';
const LABEL_28635 = 'component_28635';
export function Component28635({ value = 28635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28635, 'data-value': derived.doubled }, children);
}
export default Component28635;
