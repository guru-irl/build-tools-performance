import React from 'react';
const LABEL_28295 = 'component_28295';
export function Component28295({ value = 28295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28295, 'data-value': derived.doubled }, children);
}
export default Component28295;
