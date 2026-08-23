import React from 'react';
const LABEL_26563 = 'component_26563';
export function Component26563({ value = 26563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26563, 'data-value': derived.doubled }, children);
}
export default Component26563;
