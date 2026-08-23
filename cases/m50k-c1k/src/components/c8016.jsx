import React from 'react';
const LABEL_8016 = 'component_8016';
export function Component8016({ value = 8016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8016, 'data-value': derived.doubled }, children);
}
export default Component8016;
