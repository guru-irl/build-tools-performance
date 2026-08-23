import React from 'react';
const LABEL_40534 = 'component_40534';
export function Component40534({ value = 40534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40534, 'data-value': derived.doubled }, children);
}
export default Component40534;
