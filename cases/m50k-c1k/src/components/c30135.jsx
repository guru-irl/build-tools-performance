import React from 'react';
const LABEL_30135 = 'component_30135';
export function Component30135({ value = 30135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30135, 'data-value': derived.doubled }, children);
}
export default Component30135;
