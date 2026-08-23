import React from 'react';
const LABEL_4546 = 'component_4546';
export function Component4546({ value = 4546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4546, 'data-value': derived.doubled }, children);
}
export default Component4546;
