import React from 'react';
const LABEL_31894 = 'component_31894';
export function Component31894({ value = 31894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31894, 'data-value': derived.doubled }, children);
}
export default Component31894;
