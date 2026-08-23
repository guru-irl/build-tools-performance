import React from 'react';
const LABEL_1048 = 'component_1048';
export function Component1048({ value = 1048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1048, 'data-value': derived.doubled }, children);
}
export default Component1048;
