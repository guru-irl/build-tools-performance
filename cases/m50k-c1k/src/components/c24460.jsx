import React from 'react';
const LABEL_24460 = 'component_24460';
export function Component24460({ value = 24460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24460, 'data-value': derived.doubled }, children);
}
export default Component24460;
