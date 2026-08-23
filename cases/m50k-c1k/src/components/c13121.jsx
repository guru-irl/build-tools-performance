import React from 'react';
const LABEL_13121 = 'component_13121';
export function Component13121({ value = 13121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13121, 'data-value': derived.doubled }, children);
}
export default Component13121;
