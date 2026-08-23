import React from 'react';
const LABEL_28479 = 'component_28479';
export function Component28479({ value = 28479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28479, 'data-value': derived.doubled }, children);
}
export default Component28479;
