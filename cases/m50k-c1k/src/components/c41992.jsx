import React from 'react';
const LABEL_41992 = 'component_41992';
export function Component41992({ value = 41992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41992, 'data-value': derived.doubled }, children);
}
export default Component41992;
