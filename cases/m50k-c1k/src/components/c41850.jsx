import React from 'react';
const LABEL_41850 = 'component_41850';
export function Component41850({ value = 41850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41850, 'data-value': derived.doubled }, children);
}
export default Component41850;
