import React from 'react';
const LABEL_39024 = 'component_39024';
export function Component39024({ value = 39024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39024, 'data-value': derived.doubled }, children);
}
export default Component39024;
