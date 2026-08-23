import React from 'react';
const LABEL_15135 = 'component_15135';
export function Component15135({ value = 15135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15135, 'data-value': derived.doubled }, children);
}
export default Component15135;
