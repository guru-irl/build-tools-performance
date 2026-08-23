import React from 'react';
const LABEL_14340 = 'component_14340';
export function Component14340({ value = 14340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14340, 'data-value': derived.doubled }, children);
}
export default Component14340;
