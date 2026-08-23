import React from 'react';
const LABEL_5168 = 'component_5168';
export function Component5168({ value = 5168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5168, 'data-value': derived.doubled }, children);
}
export default Component5168;
