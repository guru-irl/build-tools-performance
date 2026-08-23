import React from 'react';
const LABEL_28982 = 'component_28982';
export function Component28982({ value = 28982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28982, 'data-value': derived.doubled }, children);
}
export default Component28982;
