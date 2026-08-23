import React from 'react';
const LABEL_1066 = 'component_1066';
export function Component1066({ value = 1066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1066, 'data-value': derived.doubled }, children);
}
export default Component1066;
