import React from 'react';
const LABEL_5417 = 'component_5417';
export function Component5417({ value = 5417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5417, 'data-value': derived.doubled }, children);
}
export default Component5417;
