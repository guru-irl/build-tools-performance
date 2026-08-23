import React from 'react';
const LABEL_40920 = 'component_40920';
export function Component40920({ value = 40920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40920, 'data-value': derived.doubled }, children);
}
export default Component40920;
