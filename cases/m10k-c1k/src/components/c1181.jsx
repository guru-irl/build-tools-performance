import React from 'react';
const LABEL_1181 = 'component_1181';
export function Component1181({ value = 1181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1181, 'data-value': derived.doubled }, children);
}
export default Component1181;
