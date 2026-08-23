import React from 'react';
const LABEL_44848 = 'component_44848';
export function Component44848({ value = 44848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44848, 'data-value': derived.doubled }, children);
}
export default Component44848;
