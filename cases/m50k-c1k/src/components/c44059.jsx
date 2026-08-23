import React from 'react';
const LABEL_44059 = 'component_44059';
export function Component44059({ value = 44059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44059, 'data-value': derived.doubled }, children);
}
export default Component44059;
