import React from 'react';
const LABEL_46892 = 'component_46892';
export function Component46892({ value = 46892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46892, 'data-value': derived.doubled }, children);
}
export default Component46892;
