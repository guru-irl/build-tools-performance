import React from 'react';
const LABEL_13842 = 'component_13842';
export function Component13842({ value = 13842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13842, 'data-value': derived.doubled }, children);
}
export default Component13842;
