import React from 'react';
const LABEL_35135 = 'component_35135';
export function Component35135({ value = 35135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35135, 'data-value': derived.doubled }, children);
}
export default Component35135;
