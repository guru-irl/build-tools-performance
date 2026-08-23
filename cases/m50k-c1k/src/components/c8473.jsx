import React from 'react';
const LABEL_8473 = 'component_8473';
export function Component8473({ value = 8473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8473, 'data-value': derived.doubled }, children);
}
export default Component8473;
