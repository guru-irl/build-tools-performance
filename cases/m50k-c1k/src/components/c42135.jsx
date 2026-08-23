import React from 'react';
const LABEL_42135 = 'component_42135';
export function Component42135({ value = 42135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42135, 'data-value': derived.doubled }, children);
}
export default Component42135;
