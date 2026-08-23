import React from 'react';
const LABEL_14420 = 'component_14420';
export function Component14420({ value = 14420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14420, 'data-value': derived.doubled }, children);
}
export default Component14420;
