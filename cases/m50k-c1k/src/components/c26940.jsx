import React from 'react';
const LABEL_26940 = 'component_26940';
export function Component26940({ value = 26940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26940, 'data-value': derived.doubled }, children);
}
export default Component26940;
