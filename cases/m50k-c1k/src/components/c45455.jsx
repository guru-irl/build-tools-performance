import React from 'react';
const LABEL_45455 = 'component_45455';
export function Component45455({ value = 45455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45455, 'data-value': derived.doubled }, children);
}
export default Component45455;
