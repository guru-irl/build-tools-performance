import React from 'react';
const LABEL_37564 = 'component_37564';
export function Component37564({ value = 37564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37564, 'data-value': derived.doubled }, children);
}
export default Component37564;
