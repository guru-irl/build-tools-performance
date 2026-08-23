import React from 'react';
const LABEL_14814 = 'component_14814';
export function Component14814({ value = 14814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14814, 'data-value': derived.doubled }, children);
}
export default Component14814;
