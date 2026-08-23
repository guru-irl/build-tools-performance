import React from 'react';
const LABEL_6088 = 'component_6088';
export function Component6088({ value = 6088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6088, 'data-value': derived.doubled }, children);
}
export default Component6088;
