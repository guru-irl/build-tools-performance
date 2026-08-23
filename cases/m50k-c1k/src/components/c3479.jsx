import React from 'react';
const LABEL_3479 = 'component_3479';
export function Component3479({ value = 3479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3479, 'data-value': derived.doubled }, children);
}
export default Component3479;
