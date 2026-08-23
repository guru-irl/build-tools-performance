import React from 'react';
const LABEL_40735 = 'component_40735';
export function Component40735({ value = 40735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40735, 'data-value': derived.doubled }, children);
}
export default Component40735;
