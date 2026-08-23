import React from 'react';
const LABEL_17647 = 'component_17647';
export function Component17647({ value = 17647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17647, 'data-value': derived.doubled }, children);
}
export default Component17647;
