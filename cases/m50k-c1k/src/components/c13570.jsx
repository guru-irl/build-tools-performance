import React from 'react';
const LABEL_13570 = 'component_13570';
export function Component13570({ value = 13570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13570, 'data-value': derived.doubled }, children);
}
export default Component13570;
