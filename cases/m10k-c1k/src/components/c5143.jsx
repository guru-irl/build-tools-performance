import React from 'react';
const LABEL_5143 = 'component_5143';
export function Component5143({ value = 5143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5143, 'data-value': derived.doubled }, children);
}
export default Component5143;
