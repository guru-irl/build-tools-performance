import React from 'react';
const LABEL_6275 = 'component_6275';
export function Component6275({ value = 6275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6275, 'data-value': derived.doubled }, children);
}
export default Component6275;
