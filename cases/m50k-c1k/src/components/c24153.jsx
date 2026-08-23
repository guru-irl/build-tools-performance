import React from 'react';
const LABEL_24153 = 'component_24153';
export function Component24153({ value = 24153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24153, 'data-value': derived.doubled }, children);
}
export default Component24153;
