import React from 'react';
const LABEL_4059 = 'component_4059';
export function Component4059({ value = 4059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4059, 'data-value': derived.doubled }, children);
}
export default Component4059;
