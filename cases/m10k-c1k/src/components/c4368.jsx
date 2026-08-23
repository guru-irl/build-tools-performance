import React from 'react';
const LABEL_4368 = 'component_4368';
export function Component4368({ value = 4368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4368, 'data-value': derived.doubled }, children);
}
export default Component4368;
