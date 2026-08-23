import React from 'react';
const LABEL_19345 = 'component_19345';
export function Component19345({ value = 19345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19345, 'data-value': derived.doubled }, children);
}
export default Component19345;
