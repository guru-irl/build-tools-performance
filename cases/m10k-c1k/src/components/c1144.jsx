import React from 'react';
const LABEL_1144 = 'component_1144';
export function Component1144({ value = 1144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1144, 'data-value': derived.doubled }, children);
}
export default Component1144;
