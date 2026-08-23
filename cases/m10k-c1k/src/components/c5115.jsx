import React from 'react';
const LABEL_5115 = 'component_5115';
export function Component5115({ value = 5115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5115, 'data-value': derived.doubled }, children);
}
export default Component5115;
