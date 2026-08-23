import React from 'react';
const LABEL_8908 = 'component_8908';
export function Component8908({ value = 8908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8908, 'data-value': derived.doubled }, children);
}
export default Component8908;
