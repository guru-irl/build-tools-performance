import React from 'react';
const LABEL_37255 = 'component_37255';
export function Component37255({ value = 37255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37255, 'data-value': derived.doubled }, children);
}
export default Component37255;
