import React from 'react';
const LABEL_5645 = 'component_5645';
export function Component5645({ value = 5645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5645, 'data-value': derived.doubled }, children);
}
export default Component5645;
