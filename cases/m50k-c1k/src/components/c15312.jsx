import React from 'react';
const LABEL_15312 = 'component_15312';
export function Component15312({ value = 15312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15312, 'data-value': derived.doubled }, children);
}
export default Component15312;
