import React from 'react';
const LABEL_21744 = 'component_21744';
export function Component21744({ value = 21744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21744, 'data-value': derived.doubled }, children);
}
export default Component21744;
