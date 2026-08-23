import React from 'react';
const LABEL_46016 = 'component_46016';
export function Component46016({ value = 46016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46016, 'data-value': derived.doubled }, children);
}
export default Component46016;
