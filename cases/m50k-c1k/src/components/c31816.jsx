import React from 'react';
const LABEL_31816 = 'component_31816';
export function Component31816({ value = 31816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31816, 'data-value': derived.doubled }, children);
}
export default Component31816;
