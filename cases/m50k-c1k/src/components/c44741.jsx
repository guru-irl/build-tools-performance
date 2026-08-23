import React from 'react';
const LABEL_44741 = 'component_44741';
export function Component44741({ value = 44741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44741, 'data-value': derived.doubled }, children);
}
export default Component44741;
