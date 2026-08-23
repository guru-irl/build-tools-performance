import React from 'react';
const LABEL_14895 = 'component_14895';
export function Component14895({ value = 14895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14895, 'data-value': derived.doubled }, children);
}
export default Component14895;
