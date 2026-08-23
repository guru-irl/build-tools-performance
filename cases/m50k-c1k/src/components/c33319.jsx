import React from 'react';
const LABEL_33319 = 'component_33319';
export function Component33319({ value = 33319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33319, 'data-value': derived.doubled }, children);
}
export default Component33319;
