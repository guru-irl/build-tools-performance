import React from 'react';
const LABEL_44258 = 'component_44258';
export function Component44258({ value = 44258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44258, 'data-value': derived.doubled }, children);
}
export default Component44258;
