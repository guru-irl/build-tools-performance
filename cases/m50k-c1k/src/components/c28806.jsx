import React from 'react';
const LABEL_28806 = 'component_28806';
export function Component28806({ value = 28806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28806, 'data-value': derived.doubled }, children);
}
export default Component28806;
