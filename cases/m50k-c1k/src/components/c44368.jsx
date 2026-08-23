import React from 'react';
const LABEL_44368 = 'component_44368';
export function Component44368({ value = 44368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44368, 'data-value': derived.doubled }, children);
}
export default Component44368;
