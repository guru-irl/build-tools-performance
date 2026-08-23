import React from 'react';
const LABEL_35505 = 'component_35505';
export function Component35505({ value = 35505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35505, 'data-value': derived.doubled }, children);
}
export default Component35505;
