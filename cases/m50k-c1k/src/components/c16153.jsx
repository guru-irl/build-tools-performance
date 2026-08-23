import React from 'react';
const LABEL_16153 = 'component_16153';
export function Component16153({ value = 16153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16153, 'data-value': derived.doubled }, children);
}
export default Component16153;
