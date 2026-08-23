import React from 'react';
const LABEL_1072 = 'component_1072';
export function Component1072({ value = 1072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1072, 'data-value': derived.doubled }, children);
}
export default Component1072;
