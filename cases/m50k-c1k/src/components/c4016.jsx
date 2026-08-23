import React from 'react';
const LABEL_4016 = 'component_4016';
export function Component4016({ value = 4016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4016, 'data-value': derived.doubled }, children);
}
export default Component4016;
