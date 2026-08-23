import React from 'react';
const LABEL_1492 = 'component_1492';
export function Component1492({ value = 1492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1492, 'data-value': derived.doubled }, children);
}
export default Component1492;
