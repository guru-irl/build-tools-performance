import React from 'react';
const LABEL_8592 = 'component_8592';
export function Component8592({ value = 8592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8592, 'data-value': derived.doubled }, children);
}
export default Component8592;
