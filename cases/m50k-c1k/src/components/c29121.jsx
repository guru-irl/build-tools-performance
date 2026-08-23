import React from 'react';
const LABEL_29121 = 'component_29121';
export function Component29121({ value = 29121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29121, 'data-value': derived.doubled }, children);
}
export default Component29121;
