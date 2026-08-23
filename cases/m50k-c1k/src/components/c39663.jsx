import React from 'react';
const LABEL_39663 = 'component_39663';
export function Component39663({ value = 39663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39663, 'data-value': derived.doubled }, children);
}
export default Component39663;
