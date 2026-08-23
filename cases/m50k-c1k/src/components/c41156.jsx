import React from 'react';
const LABEL_41156 = 'component_41156';
export function Component41156({ value = 41156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41156, 'data-value': derived.doubled }, children);
}
export default Component41156;
