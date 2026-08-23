import React from 'react';
const LABEL_44432 = 'component_44432';
export function Component44432({ value = 44432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44432, 'data-value': derived.doubled }, children);
}
export default Component44432;
