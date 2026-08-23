import React from 'react';
const LABEL_3059 = 'component_3059';
export function Component3059({ value = 3059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3059, 'data-value': derived.doubled }, children);
}
export default Component3059;
