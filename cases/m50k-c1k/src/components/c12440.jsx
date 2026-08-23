import React from 'react';
const LABEL_12440 = 'component_12440';
export function Component12440({ value = 12440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12440, 'data-value': derived.doubled }, children);
}
export default Component12440;
