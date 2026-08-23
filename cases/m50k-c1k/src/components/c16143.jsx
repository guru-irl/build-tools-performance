import React from 'react';
const LABEL_16143 = 'component_16143';
export function Component16143({ value = 16143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16143, 'data-value': derived.doubled }, children);
}
export default Component16143;
