import React from 'react';
const LABEL_22420 = 'component_22420';
export function Component22420({ value = 22420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22420, 'data-value': derived.doubled }, children);
}
export default Component22420;
