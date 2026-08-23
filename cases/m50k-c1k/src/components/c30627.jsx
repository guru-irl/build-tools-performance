import React from 'react';
const LABEL_30627 = 'component_30627';
export function Component30627({ value = 30627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30627, 'data-value': derived.doubled }, children);
}
export default Component30627;
