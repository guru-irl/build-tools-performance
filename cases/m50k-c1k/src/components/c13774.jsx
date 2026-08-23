import React from 'react';
const LABEL_13774 = 'component_13774';
export function Component13774({ value = 13774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13774, 'data-value': derived.doubled }, children);
}
export default Component13774;
