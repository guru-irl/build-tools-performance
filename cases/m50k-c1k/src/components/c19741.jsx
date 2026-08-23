import React from 'react';
const LABEL_19741 = 'component_19741';
export function Component19741({ value = 19741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19741, 'data-value': derived.doubled }, children);
}
export default Component19741;
