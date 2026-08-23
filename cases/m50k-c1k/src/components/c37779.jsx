import React from 'react';
const LABEL_37779 = 'component_37779';
export function Component37779({ value = 37779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37779, 'data-value': derived.doubled }, children);
}
export default Component37779;
