import React from 'react';
const LABEL_26143 = 'component_26143';
export function Component26143({ value = 26143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26143, 'data-value': derived.doubled }, children);
}
export default Component26143;
