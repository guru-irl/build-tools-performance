import React from 'react';
const LABEL_16175 = 'component_16175';
export function Component16175({ value = 16175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16175, 'data-value': derived.doubled }, children);
}
export default Component16175;
