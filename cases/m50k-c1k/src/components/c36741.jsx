import React from 'react';
const LABEL_36741 = 'component_36741';
export function Component36741({ value = 36741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36741, 'data-value': derived.doubled }, children);
}
export default Component36741;
