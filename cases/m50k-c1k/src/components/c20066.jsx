import React from 'react';
const LABEL_20066 = 'component_20066';
export function Component20066({ value = 20066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20066, 'data-value': derived.doubled }, children);
}
export default Component20066;
