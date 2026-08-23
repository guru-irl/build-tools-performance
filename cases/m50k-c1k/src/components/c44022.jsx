import React from 'react';
const LABEL_44022 = 'component_44022';
export function Component44022({ value = 44022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44022, 'data-value': derived.doubled }, children);
}
export default Component44022;
