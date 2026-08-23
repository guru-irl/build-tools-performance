import React from 'react';
const LABEL_12135 = 'component_12135';
export function Component12135({ value = 12135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12135, 'data-value': derived.doubled }, children);
}
export default Component12135;
