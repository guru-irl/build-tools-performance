import React from 'react';
const LABEL_4664 = 'component_4664';
export function Component4664({ value = 4664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4664, 'data-value': derived.doubled }, children);
}
export default Component4664;
