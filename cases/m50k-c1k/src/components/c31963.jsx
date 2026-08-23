import React from 'react';
const LABEL_31963 = 'component_31963';
export function Component31963({ value = 31963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31963, 'data-value': derived.doubled }, children);
}
export default Component31963;
