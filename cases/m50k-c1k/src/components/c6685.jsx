import React from 'react';
const LABEL_6685 = 'component_6685';
export function Component6685({ value = 6685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6685, 'data-value': derived.doubled }, children);
}
export default Component6685;
