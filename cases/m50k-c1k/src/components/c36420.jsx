import React from 'react';
const LABEL_36420 = 'component_36420';
export function Component36420({ value = 36420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36420, 'data-value': derived.doubled }, children);
}
export default Component36420;
