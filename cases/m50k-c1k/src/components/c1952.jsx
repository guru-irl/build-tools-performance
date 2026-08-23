import React from 'react';
const LABEL_1952 = 'component_1952';
export function Component1952({ value = 1952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1952, 'data-value': derived.doubled }, children);
}
export default Component1952;
