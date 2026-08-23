import React from 'react';
const LABEL_28115 = 'component_28115';
export function Component28115({ value = 28115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28115, 'data-value': derived.doubled }, children);
}
export default Component28115;
