import React from 'react';
const LABEL_1670 = 'component_1670';
export function Component1670({ value = 1670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1670, 'data-value': derived.doubled }, children);
}
export default Component1670;
