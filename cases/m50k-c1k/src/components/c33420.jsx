import React from 'react';
const LABEL_33420 = 'component_33420';
export function Component33420({ value = 33420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33420, 'data-value': derived.doubled }, children);
}
export default Component33420;
