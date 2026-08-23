import React from 'react';
const LABEL_42527 = 'component_42527';
export function Component42527({ value = 42527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42527, 'data-value': derived.doubled }, children);
}
export default Component42527;
