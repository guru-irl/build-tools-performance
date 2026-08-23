import React from 'react';
const LABEL_17656 = 'component_17656';
export function Component17656({ value = 17656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17656, 'data-value': derived.doubled }, children);
}
export default Component17656;
