import React from 'react';
const LABEL_5210 = 'component_5210';
export function Component5210({ value = 5210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5210, 'data-value': derived.doubled }, children);
}
export default Component5210;
