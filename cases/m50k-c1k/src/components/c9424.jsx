import React from 'react';
const LABEL_9424 = 'component_9424';
export function Component9424({ value = 9424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9424, 'data-value': derived.doubled }, children);
}
export default Component9424;
