import React from 'react';
const LABEL_14479 = 'component_14479';
export function Component14479({ value = 14479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14479, 'data-value': derived.doubled }, children);
}
export default Component14479;
