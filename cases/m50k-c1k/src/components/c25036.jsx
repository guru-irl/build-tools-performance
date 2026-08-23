import React from 'react';
const LABEL_25036 = 'component_25036';
export function Component25036({ value = 25036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25036, 'data-value': derived.doubled }, children);
}
export default Component25036;
