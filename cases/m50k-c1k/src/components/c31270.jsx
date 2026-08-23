import React from 'react';
const LABEL_31270 = 'component_31270';
export function Component31270({ value = 31270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31270, 'data-value': derived.doubled }, children);
}
export default Component31270;
