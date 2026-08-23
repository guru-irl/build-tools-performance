import React from 'react';
const LABEL_17828 = 'component_17828';
export function Component17828({ value = 17828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17828, 'data-value': derived.doubled }, children);
}
export default Component17828;
