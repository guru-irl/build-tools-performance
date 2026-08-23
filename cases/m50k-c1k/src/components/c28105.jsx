import React from 'react';
const LABEL_28105 = 'component_28105';
export function Component28105({ value = 28105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28105, 'data-value': derived.doubled }, children);
}
export default Component28105;
