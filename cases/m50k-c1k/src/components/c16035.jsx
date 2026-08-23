import React from 'react';
const LABEL_16035 = 'component_16035';
export function Component16035({ value = 16035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16035, 'data-value': derived.doubled }, children);
}
export default Component16035;
