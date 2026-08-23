import React from 'react';
const LABEL_20645 = 'component_20645';
export function Component20645({ value = 20645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20645, 'data-value': derived.doubled }, children);
}
export default Component20645;
