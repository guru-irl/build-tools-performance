import React from 'react';
const LABEL_15359 = 'component_15359';
export function Component15359({ value = 15359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15359, 'data-value': derived.doubled }, children);
}
export default Component15359;
