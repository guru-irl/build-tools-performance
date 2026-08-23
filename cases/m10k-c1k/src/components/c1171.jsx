import React from 'react';
const LABEL_1171 = 'component_1171';
export function Component1171({ value = 1171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1171, 'data-value': derived.doubled }, children);
}
export default Component1171;
