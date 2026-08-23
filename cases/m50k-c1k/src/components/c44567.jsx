import React from 'react';
const LABEL_44567 = 'component_44567';
export function Component44567({ value = 44567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44567, 'data-value': derived.doubled }, children);
}
export default Component44567;
