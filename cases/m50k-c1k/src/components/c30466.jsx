import React from 'react';
const LABEL_30466 = 'component_30466';
export function Component30466({ value = 30466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30466, 'data-value': derived.doubled }, children);
}
export default Component30466;
