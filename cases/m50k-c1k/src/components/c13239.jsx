import React from 'react';
const LABEL_13239 = 'component_13239';
export function Component13239({ value = 13239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13239, 'data-value': derived.doubled }, children);
}
export default Component13239;
