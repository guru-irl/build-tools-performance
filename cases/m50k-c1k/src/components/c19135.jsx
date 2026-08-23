import React from 'react';
const LABEL_19135 = 'component_19135';
export function Component19135({ value = 19135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19135, 'data-value': derived.doubled }, children);
}
export default Component19135;
