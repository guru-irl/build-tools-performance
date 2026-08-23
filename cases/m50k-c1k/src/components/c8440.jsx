import React from 'react';
const LABEL_8440 = 'component_8440';
export function Component8440({ value = 8440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8440, 'data-value': derived.doubled }, children);
}
export default Component8440;
