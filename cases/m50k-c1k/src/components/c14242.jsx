import React from 'react';
const LABEL_14242 = 'component_14242';
export function Component14242({ value = 14242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14242, 'data-value': derived.doubled }, children);
}
export default Component14242;
