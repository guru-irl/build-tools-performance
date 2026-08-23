import React from 'react';
const LABEL_26417 = 'component_26417';
export function Component26417({ value = 26417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26417, 'data-value': derived.doubled }, children);
}
export default Component26417;
