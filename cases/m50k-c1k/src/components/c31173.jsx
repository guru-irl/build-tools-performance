import React from 'react';
const LABEL_31173 = 'component_31173';
export function Component31173({ value = 31173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31173, 'data-value': derived.doubled }, children);
}
export default Component31173;
