import React from 'react';
const LABEL_1107 = 'component_1107';
export function Component1107({ value = 1107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1107, 'data-value': derived.doubled }, children);
}
export default Component1107;
