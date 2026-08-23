import React from 'react';
const LABEL_29275 = 'component_29275';
export function Component29275({ value = 29275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29275, 'data-value': derived.doubled }, children);
}
export default Component29275;
