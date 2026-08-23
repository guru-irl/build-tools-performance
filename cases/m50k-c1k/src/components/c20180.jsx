import React from 'react';
const LABEL_20180 = 'component_20180';
export function Component20180({ value = 20180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20180, 'data-value': derived.doubled }, children);
}
export default Component20180;
