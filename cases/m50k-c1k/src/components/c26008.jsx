import React from 'react';
const LABEL_26008 = 'component_26008';
export function Component26008({ value = 26008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26008, 'data-value': derived.doubled }, children);
}
export default Component26008;
