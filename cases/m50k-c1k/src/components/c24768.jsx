import React from 'react';
const LABEL_24768 = 'component_24768';
export function Component24768({ value = 24768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24768, 'data-value': derived.doubled }, children);
}
export default Component24768;
