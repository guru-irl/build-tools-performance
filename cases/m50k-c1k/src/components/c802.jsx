import React from 'react';
const LABEL_802 = 'component_802';
export function Component802({ value = 802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_802, 'data-value': derived.doubled }, children);
}
export default Component802;
