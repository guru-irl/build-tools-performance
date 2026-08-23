import React from 'react';
const LABEL_9556 = 'component_9556';
export function Component9556({ value = 9556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9556, 'data-value': derived.doubled }, children);
}
export default Component9556;
