import React from 'react';
const LABEL_46135 = 'component_46135';
export function Component46135({ value = 46135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46135, 'data-value': derived.doubled }, children);
}
export default Component46135;
