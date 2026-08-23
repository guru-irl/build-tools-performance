import React from 'react';
const LABEL_7066 = 'component_7066';
export function Component7066({ value = 7066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7066, 'data-value': derived.doubled }, children);
}
export default Component7066;
