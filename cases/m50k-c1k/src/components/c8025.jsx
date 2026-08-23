import React from 'react';
const LABEL_8025 = 'component_8025';
export function Component8025({ value = 8025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8025, 'data-value': derived.doubled }, children);
}
export default Component8025;
