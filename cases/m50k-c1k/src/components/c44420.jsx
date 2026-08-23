import React from 'react';
const LABEL_44420 = 'component_44420';
export function Component44420({ value = 44420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44420, 'data-value': derived.doubled }, children);
}
export default Component44420;
