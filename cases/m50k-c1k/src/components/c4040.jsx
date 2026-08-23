import React from 'react';
const LABEL_4040 = 'component_4040';
export function Component4040({ value = 4040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4040, 'data-value': derived.doubled }, children);
}
export default Component4040;
