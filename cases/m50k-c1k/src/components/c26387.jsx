import React from 'react';
const LABEL_26387 = 'component_26387';
export function Component26387({ value = 26387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26387, 'data-value': derived.doubled }, children);
}
export default Component26387;
