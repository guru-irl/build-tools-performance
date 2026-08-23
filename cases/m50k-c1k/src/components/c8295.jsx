import React from 'react';
const LABEL_8295 = 'component_8295';
export function Component8295({ value = 8295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8295, 'data-value': derived.doubled }, children);
}
export default Component8295;
