import React from 'react';
const LABEL_1257 = 'component_1257';
export function Component1257({ value = 1257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1257, 'data-value': derived.doubled }, children);
}
export default Component1257;
