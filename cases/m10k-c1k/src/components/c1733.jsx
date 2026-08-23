import React from 'react';
const LABEL_1733 = 'component_1733';
export function Component1733({ value = 1733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1733, 'data-value': derived.doubled }, children);
}
export default Component1733;
