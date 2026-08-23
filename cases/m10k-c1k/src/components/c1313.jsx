import React from 'react';
const LABEL_1313 = 'component_1313';
export function Component1313({ value = 1313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1313, 'data-value': derived.doubled }, children);
}
export default Component1313;
