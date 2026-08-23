import React from 'react';
const LABEL_31675 = 'component_31675';
export function Component31675({ value = 31675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31675, 'data-value': derived.doubled }, children);
}
export default Component31675;
