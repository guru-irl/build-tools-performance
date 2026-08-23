import React from 'react';
const LABEL_39316 = 'component_39316';
export function Component39316({ value = 39316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39316, 'data-value': derived.doubled }, children);
}
export default Component39316;
