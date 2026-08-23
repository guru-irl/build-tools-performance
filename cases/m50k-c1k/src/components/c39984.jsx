import React from 'react';
const LABEL_39984 = 'component_39984';
export function Component39984({ value = 39984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39984, 'data-value': derived.doubled }, children);
}
export default Component39984;
