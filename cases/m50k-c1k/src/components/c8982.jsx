import React from 'react';
const LABEL_8982 = 'component_8982';
export function Component8982({ value = 8982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8982, 'data-value': derived.doubled }, children);
}
export default Component8982;
