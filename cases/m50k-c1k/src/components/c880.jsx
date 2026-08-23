import React from 'react';
const LABEL_880 = 'component_880';
export function Component880({ value = 880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_880, 'data-value': derived.doubled }, children);
}
export default Component880;
