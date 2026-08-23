import React from 'react';
const LABEL_17635 = 'component_17635';
export function Component17635({ value = 17635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17635, 'data-value': derived.doubled }, children);
}
export default Component17635;
