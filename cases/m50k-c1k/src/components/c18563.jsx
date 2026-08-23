import React from 'react';
const LABEL_18563 = 'component_18563';
export function Component18563({ value = 18563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18563, 'data-value': derived.doubled }, children);
}
export default Component18563;
