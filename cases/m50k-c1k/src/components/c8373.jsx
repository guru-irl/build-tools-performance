import React from 'react';
const LABEL_8373 = 'component_8373';
export function Component8373({ value = 8373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8373, 'data-value': derived.doubled }, children);
}
export default Component8373;
