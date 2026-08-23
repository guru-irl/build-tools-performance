import React from 'react';
const LABEL_22952 = 'component_22952';
export function Component22952({ value = 22952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22952, 'data-value': derived.doubled }, children);
}
export default Component22952;
