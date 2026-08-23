import React from 'react';
const LABEL_4667 = 'component_4667';
export function Component4667({ value = 4667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4667, 'data-value': derived.doubled }, children);
}
export default Component4667;
