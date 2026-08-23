import React from 'react';
const LABEL_42534 = 'component_42534';
export function Component42534({ value = 42534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42534, 'data-value': derived.doubled }, children);
}
export default Component42534;
