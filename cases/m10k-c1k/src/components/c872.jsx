import React from 'react';
const LABEL_872 = 'component_872';
export function Component872({ value = 872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_872, 'data-value': derived.doubled }, children);
}
export default Component872;
