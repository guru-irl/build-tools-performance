import React from 'react';
const LABEL_44401 = 'component_44401';
export function Component44401({ value = 44401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44401, 'data-value': derived.doubled }, children);
}
export default Component44401;
