import React from 'react';
const LABEL_37135 = 'component_37135';
export function Component37135({ value = 37135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37135, 'data-value': derived.doubled }, children);
}
export default Component37135;
