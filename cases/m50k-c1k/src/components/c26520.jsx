import React from 'react';
const LABEL_26520 = 'component_26520';
export function Component26520({ value = 26520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26520, 'data-value': derived.doubled }, children);
}
export default Component26520;
