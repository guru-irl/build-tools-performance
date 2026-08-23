import React from 'react';
const LABEL_4912 = 'component_4912';
export function Component4912({ value = 4912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4912, 'data-value': derived.doubled }, children);
}
export default Component4912;
