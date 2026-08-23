import React from 'react';
const LABEL_24486 = 'component_24486';
export function Component24486({ value = 24486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24486, 'data-value': derived.doubled }, children);
}
export default Component24486;
