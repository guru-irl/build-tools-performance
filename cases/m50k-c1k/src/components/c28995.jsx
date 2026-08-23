import React from 'react';
const LABEL_28995 = 'component_28995';
export function Component28995({ value = 28995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28995, 'data-value': derived.doubled }, children);
}
export default Component28995;
