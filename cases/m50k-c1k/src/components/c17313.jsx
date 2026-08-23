import React from 'react';
const LABEL_17313 = 'component_17313';
export function Component17313({ value = 17313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17313, 'data-value': derived.doubled }, children);
}
export default Component17313;
