import React from 'react';
const LABEL_7313 = 'component_7313';
export function Component7313({ value = 7313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7313, 'data-value': derived.doubled }, children);
}
export default Component7313;
