import React from 'react';
const LABEL_13745 = 'component_13745';
export function Component13745({ value = 13745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13745, 'data-value': derived.doubled }, children);
}
export default Component13745;
