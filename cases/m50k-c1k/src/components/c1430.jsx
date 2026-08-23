import React from 'react';
const LABEL_1430 = 'component_1430';
export function Component1430({ value = 1430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1430, 'data-value': derived.doubled }, children);
}
export default Component1430;
