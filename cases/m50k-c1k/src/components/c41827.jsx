import React from 'react';
const LABEL_41827 = 'component_41827';
export function Component41827({ value = 41827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41827, 'data-value': derived.doubled }, children);
}
export default Component41827;
