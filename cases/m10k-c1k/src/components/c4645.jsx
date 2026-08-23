import React from 'react';
const LABEL_4645 = 'component_4645';
export function Component4645({ value = 4645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4645, 'data-value': derived.doubled }, children);
}
export default Component4645;
