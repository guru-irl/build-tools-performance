import React from 'react';
const LABEL_14838 = 'component_14838';
export function Component14838({ value = 14838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14838, 'data-value': derived.doubled }, children);
}
export default Component14838;
