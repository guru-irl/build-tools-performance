import React from 'react';
const LABEL_13970 = 'component_13970';
export function Component13970({ value = 13970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13970, 'data-value': derived.doubled }, children);
}
export default Component13970;
