import React from 'react';
const LABEL_41331 = 'component_41331';
export function Component41331({ value = 41331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41331, 'data-value': derived.doubled }, children);
}
export default Component41331;
