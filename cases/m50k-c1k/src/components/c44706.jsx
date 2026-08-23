import React from 'react';
const LABEL_44706 = 'component_44706';
export function Component44706({ value = 44706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44706, 'data-value': derived.doubled }, children);
}
export default Component44706;
