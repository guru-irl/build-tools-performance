import React from 'react';
const LABEL_15479 = 'component_15479';
export function Component15479({ value = 15479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15479, 'data-value': derived.doubled }, children);
}
export default Component15479;
