import React from 'react';
const LABEL_44299 = 'component_44299';
export function Component44299({ value = 44299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44299, 'data-value': derived.doubled }, children);
}
export default Component44299;
