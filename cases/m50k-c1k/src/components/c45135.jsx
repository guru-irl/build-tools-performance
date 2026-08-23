import React from 'react';
const LABEL_45135 = 'component_45135';
export function Component45135({ value = 45135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45135, 'data-value': derived.doubled }, children);
}
export default Component45135;
