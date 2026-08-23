import React from 'react';
const LABEL_39138 = 'component_39138';
export function Component39138({ value = 39138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39138, 'data-value': derived.doubled }, children);
}
export default Component39138;
