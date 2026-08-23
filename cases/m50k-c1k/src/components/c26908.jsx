import React from 'react';
const LABEL_26908 = 'component_26908';
export function Component26908({ value = 26908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26908, 'data-value': derived.doubled }, children);
}
export default Component26908;
