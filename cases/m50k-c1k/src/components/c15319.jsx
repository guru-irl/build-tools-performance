import React from 'react';
const LABEL_15319 = 'component_15319';
export function Component15319({ value = 15319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15319, 'data-value': derived.doubled }, children);
}
export default Component15319;
