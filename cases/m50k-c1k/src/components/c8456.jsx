import React from 'react';
const LABEL_8456 = 'component_8456';
export function Component8456({ value = 8456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8456, 'data-value': derived.doubled }, children);
}
export default Component8456;
