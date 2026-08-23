import React from 'react';
const LABEL_15077 = 'component_15077';
export function Component15077({ value = 15077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15077, 'data-value': derived.doubled }, children);
}
export default Component15077;
