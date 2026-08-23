import React from 'react';
const LABEL_4340 = 'component_4340';
export function Component4340({ value = 4340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4340, 'data-value': derived.doubled }, children);
}
export default Component4340;
