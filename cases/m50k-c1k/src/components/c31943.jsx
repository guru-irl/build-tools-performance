import React from 'react';
const LABEL_31943 = 'component_31943';
export function Component31943({ value = 31943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31943, 'data-value': derived.doubled }, children);
}
export default Component31943;
