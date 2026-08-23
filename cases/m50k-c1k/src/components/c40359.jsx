import React from 'react';
const LABEL_40359 = 'component_40359';
export function Component40359({ value = 40359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40359, 'data-value': derived.doubled }, children);
}
export default Component40359;
