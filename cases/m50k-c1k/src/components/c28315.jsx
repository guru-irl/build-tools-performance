import React from 'react';
const LABEL_28315 = 'component_28315';
export function Component28315({ value = 28315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28315, 'data-value': derived.doubled }, children);
}
export default Component28315;
