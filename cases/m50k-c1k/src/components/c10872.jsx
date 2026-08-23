import React from 'react';
const LABEL_10872 = 'component_10872';
export function Component10872({ value = 10872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10872, 'data-value': derived.doubled }, children);
}
export default Component10872;
