import React from 'react';
const LABEL_35979 = 'component_35979';
export function Component35979({ value = 35979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35979, 'data-value': derived.doubled }, children);
}
export default Component35979;
