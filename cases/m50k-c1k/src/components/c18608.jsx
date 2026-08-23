import React from 'react';
const LABEL_18608 = 'component_18608';
export function Component18608({ value = 18608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18608, 'data-value': derived.doubled }, children);
}
export default Component18608;
