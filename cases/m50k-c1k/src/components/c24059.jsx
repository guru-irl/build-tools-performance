import React from 'react';
const LABEL_24059 = 'component_24059';
export function Component24059({ value = 24059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24059, 'data-value': derived.doubled }, children);
}
export default Component24059;
