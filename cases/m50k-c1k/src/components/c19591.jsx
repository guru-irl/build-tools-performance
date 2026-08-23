import React from 'react';
const LABEL_19591 = 'component_19591';
export function Component19591({ value = 19591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19591, 'data-value': derived.doubled }, children);
}
export default Component19591;
