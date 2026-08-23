import React from 'react';
const LABEL_17272 = 'component_17272';
export function Component17272({ value = 17272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17272, 'data-value': derived.doubled }, children);
}
export default Component17272;
