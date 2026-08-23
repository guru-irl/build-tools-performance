import React from 'react';
const LABEL_31299 = 'component_31299';
export function Component31299({ value = 31299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31299, 'data-value': derived.doubled }, children);
}
export default Component31299;
