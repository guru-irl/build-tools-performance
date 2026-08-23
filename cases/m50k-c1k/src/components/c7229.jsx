import React from 'react';
const LABEL_7229 = 'component_7229';
export function Component7229({ value = 7229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7229, 'data-value': derived.doubled }, children);
}
export default Component7229;
