import React from 'react';
const LABEL_39903 = 'component_39903';
export function Component39903({ value = 39903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39903, 'data-value': derived.doubled }, children);
}
export default Component39903;
