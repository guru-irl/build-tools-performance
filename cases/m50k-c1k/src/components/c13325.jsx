import React from 'react';
const LABEL_13325 = 'component_13325';
export function Component13325({ value = 13325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13325, 'data-value': derived.doubled }, children);
}
export default Component13325;
