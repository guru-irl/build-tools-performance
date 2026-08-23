import React from 'react';
const LABEL_39308 = 'component_39308';
export function Component39308({ value = 39308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39308, 'data-value': derived.doubled }, children);
}
export default Component39308;
