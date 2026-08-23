import React from 'react';
const LABEL_41096 = 'component_41096';
export function Component41096({ value = 41096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41096, 'data-value': derived.doubled }, children);
}
export default Component41096;
