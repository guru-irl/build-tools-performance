import React from 'react';
const LABEL_26319 = 'component_26319';
export function Component26319({ value = 26319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26319, 'data-value': derived.doubled }, children);
}
export default Component26319;
