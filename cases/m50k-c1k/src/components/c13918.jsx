import React from 'react';
const LABEL_13918 = 'component_13918';
export function Component13918({ value = 13918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13918, 'data-value': derived.doubled }, children);
}
export default Component13918;
