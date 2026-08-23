import React from 'react';
const LABEL_20368 = 'component_20368';
export function Component20368({ value = 20368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20368, 'data-value': derived.doubled }, children);
}
export default Component20368;
