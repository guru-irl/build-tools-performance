import React from 'react';
const LABEL_18765 = 'component_18765';
export function Component18765({ value = 18765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18765, 'data-value': derived.doubled }, children);
}
export default Component18765;
