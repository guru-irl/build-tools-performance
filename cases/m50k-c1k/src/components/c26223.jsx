import React from 'react';
const LABEL_26223 = 'component_26223';
export function Component26223({ value = 26223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26223, 'data-value': derived.doubled }, children);
}
export default Component26223;
