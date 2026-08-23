import React from 'react';
const LABEL_37282 = 'component_37282';
export function Component37282({ value = 37282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37282, 'data-value': derived.doubled }, children);
}
export default Component37282;
