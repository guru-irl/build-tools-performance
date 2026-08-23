import React from 'react';
const LABEL_18627 = 'component_18627';
export function Component18627({ value = 18627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18627, 'data-value': derived.doubled }, children);
}
export default Component18627;
