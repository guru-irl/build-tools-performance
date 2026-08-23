import React from 'react';
const LABEL_28733 = 'component_28733';
export function Component28733({ value = 28733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28733, 'data-value': derived.doubled }, children);
}
export default Component28733;
