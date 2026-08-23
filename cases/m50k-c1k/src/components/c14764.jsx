import React from 'react';
const LABEL_14764 = 'component_14764';
export function Component14764({ value = 14764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14764, 'data-value': derived.doubled }, children);
}
export default Component14764;
