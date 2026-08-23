import React from 'react';
const LABEL_5082 = 'component_5082';
export function Component5082({ value = 5082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5082, 'data-value': derived.doubled }, children);
}
export default Component5082;
