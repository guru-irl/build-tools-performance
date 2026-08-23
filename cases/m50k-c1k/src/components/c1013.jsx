import React from 'react';
const LABEL_1013 = 'component_1013';
export function Component1013({ value = 1013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1013, 'data-value': derived.doubled }, children);
}
export default Component1013;
