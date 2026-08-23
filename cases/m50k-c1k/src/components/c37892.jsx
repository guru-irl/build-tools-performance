import React from 'react';
const LABEL_37892 = 'component_37892';
export function Component37892({ value = 37892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37892, 'data-value': derived.doubled }, children);
}
export default Component37892;
