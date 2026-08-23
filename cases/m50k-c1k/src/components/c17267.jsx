import React from 'react';
const LABEL_17267 = 'component_17267';
export function Component17267({ value = 17267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17267, 'data-value': derived.doubled }, children);
}
export default Component17267;
