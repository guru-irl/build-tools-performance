import React from 'react';
const LABEL_46460 = 'component_46460';
export function Component46460({ value = 46460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46460, 'data-value': derived.doubled }, children);
}
export default Component46460;
