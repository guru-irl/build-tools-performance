import React from 'react';
const LABEL_41920 = 'component_41920';
export function Component41920({ value = 41920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41920, 'data-value': derived.doubled }, children);
}
export default Component41920;
