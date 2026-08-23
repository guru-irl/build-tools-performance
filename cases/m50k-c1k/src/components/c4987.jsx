import React from 'react';
const LABEL_4987 = 'component_4987';
export function Component4987({ value = 4987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4987, 'data-value': derived.doubled }, children);
}
export default Component4987;
