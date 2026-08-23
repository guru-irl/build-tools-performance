import React from 'react';
const LABEL_4420 = 'component_4420';
export function Component4420({ value = 4420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4420, 'data-value': derived.doubled }, children);
}
export default Component4420;
