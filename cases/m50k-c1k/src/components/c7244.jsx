import React from 'react';
const LABEL_7244 = 'component_7244';
export function Component7244({ value = 7244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7244, 'data-value': derived.doubled }, children);
}
export default Component7244;
