import React from 'react';
const LABEL_16135 = 'component_16135';
export function Component16135({ value = 16135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16135, 'data-value': derived.doubled }, children);
}
export default Component16135;
