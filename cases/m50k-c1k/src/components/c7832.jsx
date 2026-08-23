import React from 'react';
const LABEL_7832 = 'component_7832';
export function Component7832({ value = 7832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7832, 'data-value': derived.doubled }, children);
}
export default Component7832;
