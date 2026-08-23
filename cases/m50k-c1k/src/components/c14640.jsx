import React from 'react';
const LABEL_14640 = 'component_14640';
export function Component14640({ value = 14640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14640, 'data-value': derived.doubled }, children);
}
export default Component14640;
