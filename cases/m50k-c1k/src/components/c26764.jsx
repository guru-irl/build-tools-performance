import React from 'react';
const LABEL_26764 = 'component_26764';
export function Component26764({ value = 26764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26764, 'data-value': derived.doubled }, children);
}
export default Component26764;
