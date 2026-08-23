import React from 'react';
const LABEL_16086 = 'component_16086';
export function Component16086({ value = 16086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16086, 'data-value': derived.doubled }, children);
}
export default Component16086;
