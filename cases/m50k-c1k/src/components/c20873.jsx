import React from 'react';
const LABEL_20873 = 'component_20873';
export function Component20873({ value = 20873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20873, 'data-value': derived.doubled }, children);
}
export default Component20873;
