import React from 'react';
const LABEL_42643 = 'component_42643';
export function Component42643({ value = 42643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42643, 'data-value': derived.doubled }, children);
}
export default Component42643;
