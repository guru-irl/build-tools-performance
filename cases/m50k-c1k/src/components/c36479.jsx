import React from 'react';
const LABEL_36479 = 'component_36479';
export function Component36479({ value = 36479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36479, 'data-value': derived.doubled }, children);
}
export default Component36479;
