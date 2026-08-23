import React from 'react';
const LABEL_41368 = 'component_41368';
export function Component41368({ value = 41368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41368, 'data-value': derived.doubled }, children);
}
export default Component41368;
