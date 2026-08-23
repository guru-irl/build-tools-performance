import React from 'react';
const LABEL_35313 = 'component_35313';
export function Component35313({ value = 35313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35313, 'data-value': derived.doubled }, children);
}
export default Component35313;
