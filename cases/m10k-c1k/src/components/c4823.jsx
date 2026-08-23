import React from 'react';
const LABEL_4823 = 'component_4823';
export function Component4823({ value = 4823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4823, 'data-value': derived.doubled }, children);
}
export default Component4823;
