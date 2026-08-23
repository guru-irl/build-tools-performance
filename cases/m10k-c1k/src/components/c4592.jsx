import React from 'react';
const LABEL_4592 = 'component_4592';
export function Component4592({ value = 4592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4592, 'data-value': derived.doubled }, children);
}
export default Component4592;
