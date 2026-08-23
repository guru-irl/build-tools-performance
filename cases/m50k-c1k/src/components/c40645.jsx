import React from 'react';
const LABEL_40645 = 'component_40645';
export function Component40645({ value = 40645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40645, 'data-value': derived.doubled }, children);
}
export default Component40645;
