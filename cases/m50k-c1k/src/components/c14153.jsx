import React from 'react';
const LABEL_14153 = 'component_14153';
export function Component14153({ value = 14153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14153, 'data-value': derived.doubled }, children);
}
export default Component14153;
