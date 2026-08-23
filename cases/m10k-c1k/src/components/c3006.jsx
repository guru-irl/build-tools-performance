import React from 'react';
const LABEL_3006 = 'component_3006';
export function Component3006({ value = 3006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3006, 'data-value': derived.doubled }, children);
}
export default Component3006;
