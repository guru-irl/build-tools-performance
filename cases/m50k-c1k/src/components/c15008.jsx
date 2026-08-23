import React from 'react';
const LABEL_15008 = 'component_15008';
export function Component15008({ value = 15008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15008, 'data-value': derived.doubled }, children);
}
export default Component15008;
