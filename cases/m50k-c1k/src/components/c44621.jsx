import React from 'react';
const LABEL_44621 = 'component_44621';
export function Component44621({ value = 44621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44621, 'data-value': derived.doubled }, children);
}
export default Component44621;
