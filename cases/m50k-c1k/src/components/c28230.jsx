import React from 'react';
const LABEL_28230 = 'component_28230';
export function Component28230({ value = 28230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28230, 'data-value': derived.doubled }, children);
}
export default Component28230;
