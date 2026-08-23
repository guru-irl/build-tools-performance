import React from 'react';
const LABEL_45255 = 'component_45255';
export function Component45255({ value = 45255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45255, 'data-value': derived.doubled }, children);
}
export default Component45255;
