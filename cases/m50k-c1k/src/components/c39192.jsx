import React from 'react';
const LABEL_39192 = 'component_39192';
export function Component39192({ value = 39192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39192, 'data-value': derived.doubled }, children);
}
export default Component39192;
