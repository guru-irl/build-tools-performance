import React from 'react';
const LABEL_31295 = 'component_31295';
export function Component31295({ value = 31295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31295, 'data-value': derived.doubled }, children);
}
export default Component31295;
