import React from 'react';
const LABEL_31881 = 'component_31881';
export function Component31881({ value = 31881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31881, 'data-value': derived.doubled }, children);
}
export default Component31881;
