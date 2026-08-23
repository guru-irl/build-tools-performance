import React from 'react';
const LABEL_28741 = 'component_28741';
export function Component28741({ value = 28741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28741, 'data-value': derived.doubled }, children);
}
export default Component28741;
