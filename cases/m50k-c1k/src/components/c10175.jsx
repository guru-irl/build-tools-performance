import React from 'react';
const LABEL_10175 = 'component_10175';
export function Component10175({ value = 10175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10175, 'data-value': derived.doubled }, children);
}
export default Component10175;
