import React from 'react';
const LABEL_3347 = 'component_3347';
export function Component3347({ value = 3347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3347, 'data-value': derived.doubled }, children);
}
export default Component3347;
