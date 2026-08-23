import React from 'react';
const LABEL_39394 = 'component_39394';
export function Component39394({ value = 39394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39394, 'data-value': derived.doubled }, children);
}
export default Component39394;
