import React from 'react';
const LABEL_44688 = 'component_44688';
export function Component44688({ value = 44688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44688, 'data-value': derived.doubled }, children);
}
export default Component44688;
